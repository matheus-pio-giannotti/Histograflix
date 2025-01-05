import React from "react";
import styled from "styled-components";
import Logo from "../Logo"; // Componente que exibe o logo do projeto
import NavLink from "../NavLink"; // Componente customizado para navegação entre páginas

// Estilo para o cabeçalho
const HeaderWrapper = styled.header`
  display: flex;
  padding: 20px 40px;
  align-items: center;
  justify-content: space-between;
  background-color: #000;
  box-shadow: 0 6px 15px rgba(0, 123, 255, 0.8);

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

// Estilo para o contêiner de navegação
const Nav = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

// Componente cabeçalho
const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavLink to="/" end>Início</NavLink>
        <NavLink to="/new-video">Novo Vídeo</NavLink>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
