import "./Topo.css";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Topo() {
  return (
    <header>
      <div className="topo">
        <picture>
          <a href="#">
            <img src="./logo.png" alt="Logo"/>
          </a>
        </picture>

        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/discover">Descobrir</NavLink> {/* corrigido */}
          <NavLink to="/salas">Salas ao Vivo</NavLink>
          <NavLink to="/comunidades">Comunidades</NavLink>
          <NavLink to="/about">Sobre</NavLink>

          {/* Botões */}
          <NavLink to="/login" className="btn">Entrar</NavLink>
          <NavLink to="/signup" className="btn btn-principal">Começar Grátis</NavLink>
        </nav>
      </div>
    </header>
  );
}


