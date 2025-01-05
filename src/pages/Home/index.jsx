import React from "react";
import styled from "styled-components";
import CardList from "../../components/CardList"; // Importa o componente CardList para exibir os vídeos.

const Container = styled.div`
  padding: 50px 0 10px 0;
  min-height: 100vh;

  @media (max-width: 768px) {
    min-height: 75vh;
  }
`;

const Intro = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h1 {
    font-size: 32px;
    margin-bottom: 5px;
    color: #007bff;
  }

  p {
    font-size: 16px;
    color: #fff;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 26px;
    }

    p {
      font-size: 16px;
    }
  }
`;

const NewVideo = () => {
  return (
    <Container>
      <Intro>
        <h1>Bem-vindo(a) ao Histógraflix</h1>
        <p>
          Estamos empolgados em tê-lo(a) aqui! Aprenda, descubra, inspire-se e compartilhe
          conteúdos educativos, empolgantes e fascinantes sobre História e Geografia.
        </p>
      </Intro>
      <CardList />
    </Container>
  );
};

export default NewVideo;
