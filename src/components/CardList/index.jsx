import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../Card";
import ModalPlayer from "../PlayerModal";
import EditModal from "../EditModal";
import BannerNotification from "../NotificationBanner";

// Estilização do container principal da lista de cards
const CardListWrapper = styled.div`
  padding: 40px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

// Seção que agrupa cards por ciência
const Section = styled.section`
  margin-bottom: 40px;

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 300px;
    height: 50px;
    border-radius: 5px;
    font-size: 20px;
    color: #fff;
    background-color: ${(props) => (props.science === "historia" ? "#712f26" : "#1db954")};
    margin-bottom: 20px;

    @media (max-width: 768px) {
      width: 250px;
      font-size: 18px;
      height: 45px;
    }
  }
`;

// Container flexível para os cards
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

// Mensagem exibida quando não há vídeos disponíveis
const EmptyMessageWrapper = styled.div`
  text-align: center;
  margin: 50px 0;
  color: #fff;

  h2 {
    font-size: 26px;
    margin-bottom: 10px;
    color: #fff;
  }

  p {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 24px;
    }

    p {
      font-size: 16px;
    }
  }
`;

const CardList = () => {
  const [videos, setVideos] = useState([]);
  const [notification, setNotification] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Fecha a notificação
  const handleNotificationClose = () => {
    setNotification(null);
  };

  // Carrega os vídeos do servidor
useEffect(() => {
  const fetchVideos = async () => {
    try {
      const response = await fetch("https://my-json-server.typicode.com/matheus-pio-giannotti/Histograflix/db");
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data.videos)) {
          setVideos(data.videos); 
        } else {
          setNotification({ message: "Dados de vídeos inválidos!", type: "error" });
        }
      } else {
        setNotification({ message: "Erro ao carregar vídeos!", type: "error" });
      }
    } catch (error) {
      setNotification({ message: "Erro de conexão com o servidor!", type: "error" });
    }
  };
  fetchVideos(); // Chama a função após sua definição
}, []);

  // Gerencia a reprodução de um vídeo
  const handlePlayVideo = (video) => setSelectedVideo(video);

  // Fecha o modal
  const handleCloseModal = () => {
    setSelectedVideo(null);
    setIsEditModalOpen(false);
  };

  // Abre o modal de edição de vídeo
  const handleEditVideo = (video) => {
    setSelectedVideo(video);
    setIsEditModalOpen(true);
  };

  // Salva alterações no vídeo
  const handleSaveEdit = (updatedVideo) => {
    fetch(`https://my-json-server.typicode.com/matheus-pio-giannotti/Histograflix/db/${updatedVideo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedVideo),
    })
      .then((response) => {
        if (response.ok) {
          setVideos((prevVideos) =>
            prevVideos.map((video) =>
              video.id === updatedVideo.id ? updatedVideo : video
            )
          );
          setNotification({ message: "Vídeo atualizado com sucesso!", type: "success" });
          handleCloseModal();
        } else {
          setNotification({ message: "Erro ao atualizar vídeo!", type: "error" });
        }
      })
      .catch(() => {
        setNotification({ message: "Erro de conexão com o servidor!", type: "error" });
      });
  };

  // Deleta um vídeo
  const handleDeleteVideo = async (id) => {
    try {
      const response = await fetch(`https://my-json-server.typicode.com/matheus-pio-giannotti/Histograflix/db/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id));
        setNotification({ message: "Vídeo deletado com sucesso!", type: "success" });
      } else {
        setNotification({ message: "Erro ao deletar vídeo!", type: "error" });
      }
    } catch (error) {
      setNotification({ message: "Erro de conexão com o servidor!", type: "error" });
    }
  };

  return (
    <>
      {notification && (
        <BannerNotification
          message={notification.message}
          type={notification.type}
          duration={5000}
          onClose={handleNotificationClose}
        />
      )}

      {videos.length === 0 ? (
        <EmptyMessageWrapper>
          <h2>Ainda não há vídeos disponíveis em nosso catálogo</h2>
          <p>
            Você também pode contribuir com o crescimento e diversificação do nosso
            catálogo. Adicione um vídeo e compartilhe o que aprendeu com ele com
            outras pessoas.
          </p>
        </EmptyMessageWrapper>
      ) : (
        <CardListWrapper>
          {["historia", "geografia"].map((science) => {
            const filteredVideos = videos.filter((video) => video.science === science);

            return (
              filteredVideos.length > 0 && (
                <Section key={science} science={science}>
                  <h2>{science === "historia" ? "História" : "Geografia"}</h2>
                  <CardContainer>
                    {filteredVideos.map((video) => (
                      <Card
                        key={video.id}
                        video={video}
                        onEdit={() => handleEditVideo(video)}
                        onDelete={() => handleDeleteVideo(video.id)}
                        onPlay={() => handlePlayVideo(video)}
                      />
                    ))}
                  </CardContainer>
                </Section>
              )
            );
          })}
        </CardListWrapper>
      )}

      {selectedVideo && !isEditModalOpen && (
        <ModalPlayer
          isOpen={!!selectedVideo}
          onClose={handleCloseModal}
          video={selectedVideo.link}
          title={selectedVideo.title}
          description={selectedVideo.description}
          science={selectedVideo.science}
        />
      )}

      {isEditModalOpen && (
        <EditModal
          isOpen={isEditModalOpen}
          video={selectedVideo}
          onSave={handleSaveEdit}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default CardList;
