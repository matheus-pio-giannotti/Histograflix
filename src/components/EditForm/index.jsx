import React, { useState } from "react";
import styled from "styled-components";
import InputText from "../InputText"; // Importação do componente entrada de texto
import TextArea from "../TextArea"; // Importação do componente área de texto
import DropDown from "../DropDown"; // Importação do componente lista suspensa

// Wrapper para o formulário de edição
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
`;

// Grupo de botões para ações
const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

// Estilo base para os botões
const Button = styled.button`
  padding: 12px 14px;
  font-size: 14px;
  border: 2px;
  border-style: solid;
  border-radius: 5px;
  background-color: #111;
  cursor: pointer;
  
  border-color: ${(props) => (props.primary ? "#007bff" : "#aaa")};
  color: ${(props) => (props.primary ? "#007bff" : "#aaa")};

  &:hover {
    border-color: ${(props) => (props.primary ? "#1463b8" : "#888")};
    color: ${(props) => (props.primary ? "#1463b8" : "#888")};
  }
`;

// Componente editar formulário
const EditForm = ({ video, onSave, onCancel }) => {
  // Estado local para gerenciar os dados do formulário
  const [formData, setFormData] = useState({
    title: video.title,
    link: video.link,
    description: video.description,
    science: video.science,
  });

  // Estado local para gerenciar erros de validação
  const [errors, setErrors] = useState({});

  // Função para atualizar os valores do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  // Função para validar os campos do formulário
  const validateForm = () => {
    const newErrors = {};

    if (!formData.title) newErrors.title = "* O título é obrigatório.";
    if (!formData.description) newErrors.description = "* A descrição é obrigatória.";
    if (!formData.science) newErrors.science = "* Escolha uma ciência.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Função chamada ao salvar o formulário
  const handleSave = (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    onSave({ ...video, ...formData });
  };

  return (
    <FormWrapper onSubmit={handleSave}>
      {/* Campo para o título */}
      <InputText
        label="Título"
        name="title"
        value={formData.title}
        onChange={handleChange}
        error={errors.title}
      />

      {/* Campo para a descrição */}
      <TextArea
        label="Descrição"
        name="description"
        value={formData.description}
        onChange={handleChange}
        error={errors.description}
      />

      {/* Campo para selecionar a ciência */}
      <DropDown
        label="Ciência"
        name="science"
        value={formData.science}
        onChange={handleChange}
        options={[
          { value: "historia", label: "História" },
          { value: "geografia", label: "Geografia" },
        ]}
        error={errors.science}
      />

      {/* Grupo de botões de ação */}
      <ButtonGroup>
        <Button type="button" onClick={onCancel}>Cancelar</Button>
        <Button type="submit" primary>Salvar</Button>
      </ButtonGroup>
    </FormWrapper>
  );
};

export default EditForm;
