import React from "react";
import styled from "styled-components";

// Contêiner para organizar o rótulo (label) e o campo de entrada (input)
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

// Estilo para o rótulo do campo de entrada
const Label = styled.label`
  font-size: 18px;
  color: #fff;
`;

// Estilo para o campo de entrada
const Input = styled.input`
  padding: 14px;
  font-size: 14px;
  border: 2px solid #fff;
  border-radius: 5px;
  width: 100%;
  background-color: #111;
  color: #fff;
  outline: none; /* Remove o contorno padrão do navegador */
  transition: all 0.3s ease-in-out; /* Suaviza transições de estilo */

  &:hover {
    border-color: #007bff; /* Altera a cor da borda ao passar o mouse */
  }

  &:focus {
    border-color: #007bff; /* Altera a cor da borda ao focar no campo */
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.8); /* Adiciona um brilho suave */
  }
`;

// Componente campo de entrada com rótulo
const InputText = ({ label, name, type = "text", value, onChange, placeholder }) => (
  <InputWrapper>
    <Label htmlFor={name}>{label}</Label> {/* Rótulo associado ao campo */}
    <Input
      id={name} /* Conecta o rótulo ao campo de entrada */
      name={name} /* Define o nome do campo para formulários */
      type={type} /* Tipo do campo, como texto, senha, etc. */
      value={value} /* Valor atual do campo */
      onChange={onChange} /* Manipulador de eventos para mudanças no campo */
      placeholder={placeholder} /* Texto exibido como dica dentro do campo */
    />
  </InputWrapper>
);

export default InputText;
