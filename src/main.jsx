import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid"; // Biblioteca para validar props
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <App />
    </StyleSheetManager>
  </StrictMode>
);
