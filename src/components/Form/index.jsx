import React, { useState } from "react";
import styled from "styled-components";
import InputText from "../InputText"; // Importação do componente entrada de texto
import TextArea from "../TextArea"; // Importação do componente área de texto
import DropDown from "../DropDown"; // Importação do componente lista suspensa
import NotificationBanner from "../NotificationBanner"; // Importação do componente banner de notificação

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 620px;

  & > * {
    width: 100%;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 12px 14px;
  font-size: 14px;
  border: 2px solid ${(props) => (props.$secondary ? "#aaa" : "#007bff")};
  color: ${(props) => (props.$secondary ? "#aaa" : "#007bff")};
  background-color: #111;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    border-color: ${(props) => (props.$secondary ? "#888" : "#1463b8")};
    color: ${(props) => (props.$secondary ? "#888" : "#1463b8")};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const ErrorMessage = styled.span`
  font-size: 12px;
  color: #e63946;
  margin-top: -15px;
  margin-bottom: 10px;
`;

// Componente formulário
const Form = () => {
  const initialFormData = {
    title: "",
    link: "",
    description: "",
    science: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = "* Preencha este campo";
    if (!formData.link) newErrors.link = "* Preencha este campo";
    if (!formData.description) newErrors.description = "* Preencha este campo";
    if (!formData.science) newErrors.science = "* Selecione uma ciência";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleClear = () => {
    setFormData(initialFormData);
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    if (!validateForm()) {
      setNotification({ message: "Erro ao enviar o formulário!", type: "error" });
      setIsSubmitting(false);
      return;
    }

    const newVideo = { ...formData, id: (1000 + Math.floor(Math.random() * 9000)).toString() };

    try {
      const response = await fetch("https://my-json-server.typicode.com/matheus-pio-giannotti/Histograflix/db", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newVideo),
      });

      if (response.ok) {
        setNotification({ message: "Vídeo adicionado com sucesso!", type: "success" });
        handleClear();
      } else {
        setNotification({ message: "Erro ao salvar o vídeo!", type: "error" });
      }
    } catch (error) {
      setNotification({ message: "Erro de conexão com o servidor!", type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNotificationClose = () => {
    setNotification(null);
  };

  return (
    <>
      {notification && (
        <NotificationBanner
          message={notification.message}
          type={notification.type}
          onClose={handleNotificationClose}
        />
      )}
      <FormWrapper onSubmit={handleSubmit} autoComplete="off">
        <InputText
          label="Título"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Digite o título do vídeo"
        />
        {errors.title && <ErrorMessage>{errors.title}</ErrorMessage>}

        <InputText
          label="Link"
          name="link"
          type="link"
          value={formData.link}
          onChange={handleChange}
          placeholder="Digite o link do vídeo"
        />
        {errors.link && <ErrorMessage>{errors.link}</ErrorMessage>}

        <TextArea
          label="Descrição"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Digite uma descrição para o vídeo"
        />
        {errors.description && <ErrorMessage>{errors.description}</ErrorMessage>}

        <DropDown
          label="Ciência"
          name="science"
          value={formData.science}
          onChange={handleChange}
          options={[
            { value: "", label: "Selecione uma ciência" },
            { value: "historia", label: "História" },
            { value: "geografia", label: "Geografia" },
          ]}
        />
        {errors.science && <ErrorMessage>{errors.science}</ErrorMessage>}

        <ButtonGroup>
          <Button type="submit" disabled={isSubmitting}>{isSubmitting ? "Adicionando..." : "Adicionar"}</Button>
          <Button type="button" $secondary onClick={handleClear}>Limpar</Button>
        </ButtonGroup>
      </FormWrapper>
    </>
  );
};

export default Form;
