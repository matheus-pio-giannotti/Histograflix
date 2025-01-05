import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa"; // Ícones para sucesso e erro

// Animação de fade out
const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

// Container do banner
const BannerContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: flex;
  gap: 10px;
  padding: 15px 20px;
  background-color: ${(props) => props.type === "success" ? "#28a745" : "#dc3545"};
  color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-size: 16px;
  animation: ${(props) => (props.closing ? fadeOut : "none")} 0.5s forwards;
  z-index: 1000;
`;

// Ícones estilizados
const IconWrapper = styled.div`
  font-size: 18px;
`;

const NotificationBanner = ({ message, type, duration = 5000, onClose }) => {
  const [closing, setClosing] = React.useState(false);

  useEffect(() => {
    const closeTimeout = setTimeout(() => {
      setClosing(true);
      setTimeout(onClose, 500);
    }, duration);

    return () => clearTimeout(closeTimeout);
  }, [duration, onClose]);

  return (
    <BannerContainer type={type} closing={closing}>
      <IconWrapper>
        {type === "success" ? <FaCheckCircle /> : <FaExclamationCircle />}
      </IconWrapper>
      {message}
    </BannerContainer>
  );
};

export default NotificationBanner;
