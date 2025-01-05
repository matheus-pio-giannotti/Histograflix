import React from "react";
import styled from "styled-components";
import NavLink from "../NavLink"; // Componente NavLink reutilizável
import { FaHome, FaPlus } from "react-icons/fa"; // Ícones para os links

// Estilo do footer
const FooterWrapper = styled.footer`
  display: flex;
  padding: 30px 40px;
  align-items: center;
  justify-content: space-between;
  background-color: #000;
  box-shadow: 0 -6px 15px rgba(0, 123, 255, 0.8);
  font-size: 14px;

  @media (min-width: 768px) {
    flex-direction: row; /* Coloca o conteúdo em linha */
  }
`;

// Estilo para o contêiner principal
const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    display: none; /* Oculta o conteúdo em telas menores */
  }
`;

// Estilo para o NavLink centralizado
const NavWrapper = styled.nav`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 100%;
  }
`;

// Estilo para o bloco de contato
const ContactLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s;

    &:hover {
      color: #007bff;
    }
  }
`;

// Estilo para o copyright
const Copyright = styled.div`
  font-size: 14px;

  @media (max-width: 768px) {
    display: none; /* Oculta o copyright em telas menores */
  }
`;

// Componente Footer
const Footer = () => {
  return (
    <FooterWrapper>
      {/* Conteúdo para telas maiores */}
      <ContentWrapper>

        {/* Links de contato */}
        <ContactLinks>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src="/assets/icons/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src="/assets/icons/github.png" alt="GitHub" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src="/assets/icons/instagram.png" alt="Instagram" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src="/assets/icons/whatsapp.png" alt="WhatsApp" />
          </a>
        </ContactLinks>

        {/* Copyright */}
        <Copyright>&copy; 2024 - {new Date().getFullYear()} Histógraflix</Copyright>
      </ContentWrapper>

      {/* NavLink centralizado para telas menores */}
      <NavWrapper>
        <NavLink to="/" icon={FaHome} size={24}>
          Início
        </NavLink>
        <NavLink to="/new-video" icon={FaPlus} size={20}>
          Novo Vídeo
        </NavLink>
      </NavWrapper>
    </FooterWrapper>
  );
};

export default Footer;
