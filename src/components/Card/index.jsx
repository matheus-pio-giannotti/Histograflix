import React from "react";
import styled from "styled-components";
import { FaPlay, FaEdit, FaTrash } from "react-icons/fa";

// Função utilitária para extrair o ID do vídeo do YouTube
const extractYouTubeId = (link) => {
  if (typeof link !== "string") return null;
  const regex =
    /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=)|https?:\/\/(?:www\.)?youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = link.match(regex);
  return match ? match[1] : null;
};

// Estilização do container principal do Card
const CardWrapper = styled.div`
  width: 300px;
  border: 3px solid;
  border-radius: 10px;
  overflow: hidden;
  background-color: #000;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: #007bff;
    box-shadow: 0 0 26px rgba(0, 123, 255, 0.8);
  }

  ${(props) =>
    props.$science === "historia" &&
    `
      border-color: #712f26;
      box-shadow: 0 0 26px rgba(113, 47, 38, 0.8);
    `}
  ${(props) =>
    props.$science === "geografia" &&
    `
      border-color: #1db954;
      box-shadow: 0 0 26px rgba(29, 185, 84, 0.8);
    `}
`;

// Wrapper para a thumbnail do vídeo
const ThumbnailWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 160px;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover div {
    opacity: 1;
  }
`;

// Sobreposição de "Play" na thumbnail
const PlayOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const PlayIcon = styled(FaPlay)`
  color: white;
  font-size: 36px;
`;

// Grupo de botões de ação (Editar, Excluir)
const ActionGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  background-color: #000;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 6px 10px;
  font-size: 12px;
  border: 2px solid ${(props) => (props.$delete ? "#e63946" : "#aaa")};
  border-radius: 5px;
  background-color: #000;
  color: ${(props) => (props.$delete ? "#e63946" : "#aaa")};
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: ${(props) => (props.$delete ? "#ba2c36" : "#888")};
  }
`;

const Card = ({ video, onEdit, onDelete, onPlay }) => {
  const { title, link, science } = video;
  const videoId = extractYouTubeId(link);
  const thumbnaillink = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : "https://via.placeholder.com/280x140?text=No+Thumbnail";

  return (
    <CardWrapper $science={science}>
      <ThumbnailWrapper>
        <img src={thumbnaillink} alt={title} />
        <PlayOverlay onClick={onPlay}>
          <PlayIcon />
        </PlayOverlay>
      </ThumbnailWrapper>
      <ActionGroup>
        <ActionButton onClick={onEdit}>
          <FaEdit /> Editar
        </ActionButton>
        <ActionButton $delete onClick={onDelete}>
          <FaTrash size={10} /> Excluir
        </ActionButton>
      </ActionGroup>
    </CardWrapper>
  );
};

export default Card;
