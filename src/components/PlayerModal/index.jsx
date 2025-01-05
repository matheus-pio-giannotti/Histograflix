import React, { useEffect } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

// Estilos do overlay e do modal
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1200;
`;

const ModalContainer = styled.div`
  background: #111;
  color: #fff;
  width: 90%;
  max-width: 1200px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.8);
  overflow: hidden;
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 768px) {
    flex-direction: row;
    height: auto;
  }
`;

const VideoWrapper = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;

  iframe {
    width: 800px; /* Aumentado para dimensões maiores */
    height: 450px; /* Mantendo a proporção 16:9 */
    border: none;
  }

  @media (max-width: 768px) {
    iframe {
      width: 100%;
      height: 245px;
    }
  }
`;

const InfoWrapper = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  overflow-y: auto;
  max-height: 450px; /* Altura máxima para evitar crescimento excessivo */

  @media (max-width: 768px) {
    padding: 10px;
    max-height: 250px;
  }
`;

const Title = styled.h2`
  color: ${(props) => (props.science === "historia" ? "#712f26" : "#1db954") || "#fff"};
  font-size: 26px; /* Aumentado para maior destaque */
  margin-bottom: 10px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  overflow-y: auto; /* Adiciona barra de rolagem se necessário */
  max-height: 300px; /* Define altura máxima para o texto */
  white-space: pre-wrap; /* Respeita quebras de linha no texto */
  padding-right: 10px; /* Espaçamento entre o texto e a barra de rolagem */

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

// Componente ModalPlayer
const ModalPlayer = ({ isOpen, onClose, video, title, description, science }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    } else {
      document.removeEventListener("keydown", handleEscape);
    }

    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !video) return null;

  const extractYouTubeId = (link) => {
    if (!link) return null;

    const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/i;
    const match = link.match(regex);
    return match ? match[1] : null;
  };

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <InfoWrapper>
          <Title science={science}>{title || "Título não disponível"}</Title>
          <Description>{description || "Descrição não disponível"}</Description>
        </InfoWrapper>
        <VideoWrapper>
          <iframe
            src={`https://www.youtube.com/embed/${extractYouTubeId(video)}?modestbranding=0&rel=0&controls=1&color=white`}
            title={title || "Vídeo"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoWrapper>
        <CloseButton onClick={onClose}>&times;</CloseButton>
      </ModalContainer>
    </Overlay>,
    document.body
  );
};

export default ModalPlayer;
