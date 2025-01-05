import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "RobotoRegular";
    src: local("RobotoRegular"), local("RobotoRegular"), url("./Sources/Roboto-Regular.ttf") format("ttf");
  }

  @font-face {
    font-family: "RobotoBold";
    src: local("RobotoBold"), local("RobotoBold"), url("./Sources/Roboto-Bold.ttf") format("ttf");
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'RobotoRegular', sans-serif;
    background-color: #111;
    color: #fff;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Personalização da barra de rolagem */
  ::-webkit-scrollbar {
    width: 14px; /* Largura da barra */
  }

  ::-webkit-scrollbar-track {
    background: #111; /* Fundo transparente */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #aaa; /* Cor da barra */
    transition: background-color 0.3s ease, color 0.3s ease; /* Transição suave */
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #888; /* Cor mais clara ao passar o mouse */
  }

  ::-webkit-scrollbar-button:single-button:vertical:decrement {
    background: url("/assets/icons/up.png") no-repeat center;
    background-size: 14px;
    background-color: #111;
    color: #aaa;
    transition: background-color 0.3s ease, color 0.3s ease; /* Transição suave */
  }

  ::-webkit-scrollbar-button:single-button:vertical:increment {
    background: url("/assets/icons/down.png") no-repeat center;
    background-size: 14px;
    background-color: #111;
    color: #aaa;
    transition: background-color 0.3s ease, color 0.3s ease; /* Transição suave */
  }

  /* Hover Effects */
  ::-webkit-scrollbar-button:single-button:vertical:decrement:hover {
    background-color: #888; /* Altere para a cor que preferir */
    color: #aaa;
  }

  ::-webkit-scrollbar-button:single-button:vertical:increment:hover {
    background-color: #888; /* Altere para a cor que preferir */
    color: #aaa;
  }

  ::-webkit-resizer {
    background: url("/assets/icons/down.png")no-repeat center;
    background-size: 12px;
    background-color: #111; /* Cor de fundo */
  }

  textarea {
    cursor: text; /* Define o cursor de texto no campo */
  }

  textarea::-webkit-scrollbar {
    cursor: default; /* Define o cursor padrão na barra de rolagem */
  }

  textarea::-webkit-scrollbar-thumb {
    cursor: default; /* Define o cursor de ponteiro no "polegar" da barra de rolagem */
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'RobotoBold', sans-serif;
    margin-bottom: 16px;
    color: #fff;
  }

  p {
    margin-bottom: 16px;
    font-size: 16px;
    color: #fff;
  }

  a {
    text-decoration: none;
    color: #007bff;
    transition: color 0.3s;

    &:hover {
      color: #1463b8;
    }
  }

  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  button {
    cursor: pointer;
    font-family: 'RobotoRegular', sans-serif;
  }

  input, textarea {
    font-family: 'RobotoRegular', sans-serif;
  }
`;

export default GlobalStyle;
