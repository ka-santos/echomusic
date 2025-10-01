import React from "react";
import { Routes, Route } from "react-router-dom";

import Topo from "./components/Topo";
import Footer from "./components/Footer";
import Exemplo from "./components/Exemplo";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";

import "./index.css";

function App() {
  return (
    <>
      <header>
        <Topo />
      </header>

      <main className="min-h-screen">
        <Routes>
          {/* Página inicial */}
          <Route path="/" element={<HomePage />} />

          {/* Página de login */}
          <Route path="/login" element={<LoginPage />} />

          {/* Exemplo de rota */}
          <Route path="/exemplo" element={<Exemplo />} />

          {/* Página não encontrada */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;





