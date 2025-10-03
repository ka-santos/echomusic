import './Discover.css';
import React from "react";
import musica from '../../assets/musica_adventure.png';

 
export default function Discover() {  // nome alinhado
  return (
 <div className="container">
      {/* Hero */}
      <section className="hero">
        <h1>Descubra Sua Próxima Música Favorita</h1>
        <div className="options">
          <div className="card">🎧 Foco <p>Músicas para concentração</p></div>
          <div className="card">🎵 Festa <p>Trilhas para qualquer ocasião</p></div>
          <div className="card">😎 Relaxar <p>Descanse com boas músicas</p></div>
          <div className="card">💪 Treino <p>Energia para seus exercícios</p></div>
        </div>
      </section>

      {/* Amigos */}
      <section className="friends">
        <h2>Amigos Estão Ouvindo</h2>
        <div className="friend-cards">
          <div className="friend-card">
            <p><strong>Lucas Moretti</strong></p>
            <span>🎶 Stardust</span>
          </div>
        <div className="friend-card">
            <img src={musica} alt="Adventure of a Lifetime" className="friend-cover" />
        <div>
            <p><strong>Helio Barros</strong></p>
            <span>🎶 Adventure of a Lifetime</span>
        </div>
        </div>
          <div className="friend-card">
            <p><strong>Mariana Duarte</strong></p>
            <span>🎶 Miracle</span>
          </div>
        </div>
      </section>

      {/* Gêneros */}
      <section className="genres">
        <h2>Explorar Gêneros</h2>
        <div className="genre-cards">
          <div>🎸 Rock</div>
          <div>🎤 Pop</div>
          <div>🎶 Hip Hop</div>
          <div>🎹 Eletrônica</div>
          <div>🎷 Jazz</div>
          <div>🎧 MPB</div>
        </div>
      </section>

      {/* Recomendações */}
      <section className="recommended">
        <h2>Recomendado Para Você</h2>
        <div className="rec-cards">
          <div className="rec-card">📀 Good 4 U - Olivia Rodrigo</div>
          <div className="rec-card">📀 Levitating - Dua Lipa</div>
          <div className="rec-card">📀 4 AM - Jon Bellion</div>
          <div className="rec-card">📀 Heat Waves - Glass Animals</div>
        </div>
      </section>

      {/* Em Alta */}
      <section className="trending">
        <h2>Em Alta Agora</h2>
        <ol>
          <li>As It Was - Harry Styles</li>
          <li>Die For You - The Weeknd</li>
          <li>Pequenas Alegrias - Vitor Kley</li>
        </ol>
      </section>
    </div>
  );
}
