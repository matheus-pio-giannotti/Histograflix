import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #000;
  text-align: center;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 46px;
  margin-bottom: 20px;
  color: #007bff;
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  border: 2px solid #aaa;
  background-color: #000;
  color: #aaa;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    border-color: #888;
    color: #888;
  }
`;

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Container>
      <Title>Página não encontrada</Title>
      <Subtitle>
        O endereço que você tentou acessar não existe. Confira se está correto
        ou volte para a página inicial.
      </Subtitle>
      <Button onClick={handleGoHome}>Voltar para a Página Inicial</Button>
    </Container>
  );
};

export default NotFound;
