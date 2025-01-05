import styled from "styled-components"; // Para estilizar componentes
import { Link } from "react-router-dom"; // Link para navegação entre rotas

// Estilo para o logo
const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 36px;
  font-weight: bold;
  color: #007bff;
  text-decoration: none;
`;

// Componente logo
const Logo = () => {
  return <LogoWrapper to="/">Histógraflix</LogoWrapper>; // Link para a página inicial com o texto do logo
};

export default Logo;
