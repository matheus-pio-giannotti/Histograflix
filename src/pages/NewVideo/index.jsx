import React from "react";
import styled from "styled-components";
import Form from "../../components/Form"; // Importa o componente Form para ser reutilizado nesta página.

const Container = styled.div`
  padding: 45px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; // Centraliza o conteúdo verticalmente.
`;

const Title = styled.h1`
  font-size: 36px; // Tamanho grande para o título principal.
  color: #007bff; // Cor azul padrão.
  text-align: center;
  margin-bottom: 1px; // Espaçamento entre o título e o subtítulo.
`;

const Subtitle = styled.h2`
  font-size: 26px; // Tamanho médio para o subtítulo.
  color: #fff;
  margin-bottom: 30px; // Espaçamento antes do formulário.
  text-align: center;
`;

const NewVideo = () => {
  // Função chamada quando o formulário é enviado.
  const handleFormSubmit = (data) => {
    console.log("Dados do vídeo enviados:", data); 
    // Aqui você pode integrar com o backend ou salvar os dados. A função pode ser adaptada para lidar com validações ou mensagens de erro.
  };

  return (
    <Container>
      <Title>Novo Vídeo</Title>
      <Subtitle>Complete o formulário para adicionar um novo vídeo.</Subtitle>
      {/* Renderiza o componente Form e passa o método onSubmit como prop. */}
      <Form onSubmit={handleFormSubmit} />
    </Container>
  );
};

export default NewVideo;
