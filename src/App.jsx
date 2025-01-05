import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NewVideo from "./pages/NewVideo";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        {/* Rotas com cabeçalho e rodapé */}
        <Route path="/" element={<><Header /><Home /><Footer /></>}/>
        <Route path="/new-video" element={<><Header /><NewVideo /><Footer /></>}/>
        {/* Rota para página não encontrada */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
