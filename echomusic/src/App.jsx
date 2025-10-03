import React from "react";
import { Routes, Route } from "react-router-dom";

import Topo from "./components/Topo";
import Footer from "./components/Footer";


import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Discover from "./pages/Discover";
import NotFound from "./pages/NotFound";
import Routers from './Routers';
import About from "./pages/About";



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

          {/* Página de descobrir */}
          <Route path="/discover" element={<Discover />} />

          {/* Sobre */}
          <Route path="/about" element={<About />} />
          
          {/* Página não encontrada */}
          <Route path="*" element={<NotFound />} />


        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;





