import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import EditForm from "../EditForm";

// Estilo para o overlay do modal, que cobre toda a tela
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

// Estilo para o conteúdo centralizado do modal
const ModalContent = styled.div`
  background: #111;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  position: relative;
`;

// Estilo para o botão de fechar no canto superior direito
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #007bff; /* Cor de destaque ao passar o mouse */
  }
`;

// Componente EditModal para exibir o formulário de edição em um modal
const EditModal = ({ isOpen, video, onSave, onClose }) => {
  if (!isOpen) return null; // Retorna nulo se o modal não estiver aberto

  return ReactDOM.createPortal(
    <>
      {/* Overlay que cobre a tela e fecha o modal ao clicar */}
      <ModalOverlay onClick={onClose}>
        {/* Impede o fechamento do modal ao clicar no conteúdo */}
        <ModalContent onClick={(e) => e.stopPropagation()}>
          {/* Botão para fechar o modal */}
          <CloseButton onClick={onClose}>&times;</CloseButton>
          {/* Formulário de edição */}
          <EditForm video={video} onSave={onSave} onCancel={onClose} />
        </ModalContent>
      </ModalOverlay>
    </>,
    document.body // Renderiza o modal diretamente no body do documento
  );
};

export default EditModal;
