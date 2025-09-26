import "./Topo.css";

export default function Topo() {
  return (
    <header>
      <div className="topo">
        <picture>
          <a href="#">
            <img src="./logo.png"/>
          </a>
        </picture>

        <nav>
          <a href="#">Início</a>
          <a href="#">Descobrir</a>
          <a href="#">Salas ao Vivo</a>
          <a href="#">Comunidades</a>
          <a href="#">Sobre</a>
          <button className="btn">Entrar</button>
          <button className="btn">Comecar Grátis</button>
        </nav>

      </div>
    </header>
  );
}
