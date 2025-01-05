import React from "react";
import styled from "styled-components"; // Biblioteca para estilizar componentes
import { NavLink as RouterNavLink } from "react-router-dom"; // Componente para navegação com suporte a classes dinâmicas

// Estilo para o NavLink customizado
const StyledNavLink = styled(RouterNavLink)`
  width: 86px;
  padding: 2px;
  border: 2px solid #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #fff;
  text-decoration: none; /* Remove sublinhado do link */
  transition: all 0.3s ease-in-out; /* Transição suave para mudanças de estilo */

  &.active {
    border-color: #007bff; /* Cor azul para a borda do link ativo */
    color: #007bff; /* Cor azul para o texto do link ativo */
    box-shadow: 0 0 10px rgba(0, 123, 255, 0.8); /* Efeito de sombra no link ativo */
  }

  &:not(.active) {
    border-color: #fff; /* Borda branca para links inativos */
    color: #fff; /* Texto branco para links inativos */
  }

  @media (max-width: 768px) { /* Estilos para telas menores */
    span {
      display: none; /* Esconde o texto */
    }

    &.active svg {
      display: none; /* Esconde o ícone no estado ativo */
    }

    &.active span {
      display: inline-block; /* Mostra o texto no estado ativo */
    }

    &:not(.active) {
      border: none; /* Remove borda para links inativos */
    }

    &:not(.active) svg {
      display: inline-block; /* Mostra o ícone para links inativos */
    }
  }

  @media (min-width: 769px) { /* Estilos para telas maiores */
    svg {
      display: none; /* Esconde os ícones */
    }
  }
`;

// Componente NavLink com suporte para ícones e textos dinâmicos
const NavLink = ({ to, children, icon: Icon, size = 20, ...props }) => {
  return (
    <StyledNavLink to={to} {...props}>
      {/* Renderiza o ícone se o link não estiver ativo e o ícone foi passado */}
      {!props.className?.includes('active') && Icon && <Icon size={size} />}
      <span>{children}</span> {/* Renderiza o texto do link */}
    </StyledNavLink>
  );
};

export default NavLink;
