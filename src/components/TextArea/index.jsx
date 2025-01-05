import React from "react";
import styled from "styled-components"; // Biblioteca para estilizar componentes

// Contêiner para organizar o rótulo (label) e o campo de texto (textarea)
const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

// Estilo para o rótulo do campo de texto
const Label = styled.label`
  font-size: 18px;
  color: #fff;
`;

// Estilo para o campo de texto (textarea)
const TextAreaInput = styled.textarea`
  padding: 14px;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  border: 2px solid #fff;
  border-radius: 5px;
  resize: vertical;
  min-height: 160px;
  width: 100%;
  background-color: #111;
  color: #fff;
  outline: none; /* Remove o contorno padrão do navegador */
  transition: all 0.3s ease-in-out; /* Transição suave para todas as mudanças de estilo */

  &:hover {
    border-color: #007bff; /* Cor da borda quando o mouse passa por cima */
  }

  &:focus {
    border-color: #007bff; /* Altera a cor da borda quando o campo está em foco */
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.8); /* Adiciona uma sombra suave ao focar */
  }
`;

// Componente campo de texto
const TextArea = ({ label, name, value, onChange, placeholder }) => (
  <TextAreaWrapper>
    <Label htmlFor={name}>{label}</Label> {/* Rótulo associado ao campo */}
    <TextAreaInput
      id={name} /* Conecta o rótulo ao campo de texto */
      name={name} /* Nome do campo para ser usado em formulários */
      value={value} /* Valor atual do campo */
      onChange={onChange} /* Função chamada quando o valor do campo mudar */
      placeholder={placeholder} /* Texto de dica exibido dentro do campo */
    />
  </TextAreaWrapper>
);

export default TextArea;
