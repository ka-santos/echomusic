import React, { useRef, useState, useEffect } from "react";
import './About.css';

// Imagens (coloque seus imports reais)
import usuarioMarina from '../../assets/usario_karen.png';
import sobrePessoa from '../../assets/sobre_pessoa.png';
import sobre from '../../assets/sobre.jpg';
import mariana from '../../assets/usario_mariana.png';
import ana from '../../assets/usuario_ana_vitoria.png';
import isa from '../../assets/usario_isabelle.png';

export default function About() {
    const timelineRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeItem, setActiveItem] = useState(null);
    const [visibleItems, setVisibleItems] = useState([]);
    const itemRefs = useRef([]);
  
    // Atualiza scrollProgress
    useEffect(() => {
      const handleScroll = () => {
        if (!timelineRef.current) return;
        const element = timelineRef.current;
        const totalHeight = element.scrollHeight - element.clientHeight;
        const scroll = (element.scrollTop / totalHeight) * 100;
        setScrollProgress(scroll);
      };
  
      const timelineEl = timelineRef.current;
      if (timelineEl) timelineEl.addEventListener("scroll", handleScroll);
      return () => {
        if (timelineEl) timelineEl.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    // Observa visibilidade dos itens
    useEffect(() => {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            const index = Number(entry.target.dataset.index);
            if (entry.isIntersecting) {
              setVisibleItems(prev => [...new Set([...prev, index])]);
            }
          });
        },
        { threshold: 0.3 }
      );
  
      itemRefs.current.forEach((el, idx) => {
        if (el) {
          el.dataset.index = idx;
          observer.observe(el);
        }
      });
  
      return () => {
        itemRefs.current.forEach(el => el && observer.unobserve(el));
      };
    }, []);
  
    const timelineItems = [
      {
        date: "Junho 2022",
        title: "Fundação do Echo Music",
        description: "Lançamento oficial da plataforma e os primeiros usuários começam a compartilhar suas músicas favoritas.",
        icon: "🎵",
        detail: "Começamos com apenas 100 usuários beta testadores apaixonados por música.",
      },
      {
        date: "Julho 2023",
        title: "Expansão Internacional",
        description: "Echo Music alcança 50 países e ultrapassa a marca de 1 milhão de usuários ativos mensalmente.",
        icon: "🌍",
        detail: "Traduzimos a plataforma para 12 idiomas e expandimos para 3 continentes.",
      },
      {
        date: "Maio 2024",
        title: "Salas ao Vivo Lançadas",
        description: "Introdução das Salas ao Vivo, permitindo que usuários ouçam música juntos em tempo real.",
        icon: "🎧",
        detail: "Mais de 10.000 salas criadas na primeira semana de lançamento.",
      },
      {
        date: "Novembro 2024",
        title: "2 Milhões de Usuários",
        description: "Celebramos 2 milhões de usuários ativos e o lançamento de comunidades temáticas.",
        icon: "🎉",
        detail: "Criamos 500+ comunidades temáticas de diferentes gêneros musicais.",
      },
      {
        date: "Junho 2025",
        title: "Lançamento Global",
        description: "Expansão oficial para todos os continentes e parcerias com grandes gravadoras e artistas independentes.",
        icon: "🚀",
        detail: "Parcerias com mais de 100 gravadoras e 5.000 artistas independentes.",
      },
    ];
  
    return (
      <div className="about-container">
        {/* Nossa História */}
        <section className="nossa-historia">
          <h1>Nossa História</h1>
          <p>
            Criada para conectar a música com as pessoas, partindo de uma experiência social diferente que conecta pessoas ao redor do mundo.
          </p>
        </section>
  
        {/* Timeline */}
        <section className="nossa-jornada">
          <h2>Nossa Jornada</h2>
          <p>Marcos importantes na evolução do Echo Music e a construção de nossa comunidade global.</p>
  
          <div className="timeline" ref={timelineRef}>
            <div className="timeline-line">
              <div className="timeline-line-progress" style={{ height: `${scrollProgress}%` }}></div>
            </div>
  
            {timelineItems.map((item, index) => (
              <div
                key={index}
                ref={el => (itemRefs.current[index] = el)}
                className={`timeline-item ${index % 2 === 0 ? "left" : "right"} ${visibleItems.includes(index) ? "visible" : ""} ${activeItem === index ? "active" : ""}`}
                onMouseEnter={() => setActiveItem(index)}
                onMouseLeave={() => setActiveItem(null)}
              >
                <div className="timeline-content">
                  <div className="timeline-icon">{item.icon}</div>
                  <div className="timeline-date">{item.date}</div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                  <div className="timeline-detail">
                    <div className="timeline-detail-divider"></div>
                    <p className="timeline-detail-text">{item.detail}</p>
                  </div>
                </div>
                <div className="timeline-dot">
                  <div className="timeline-dot-inner"></div>
                </div>
              </div>
            ))}
          </div>
        </section>
  
        {/* Equipe */}
        <section className="nossa-equipe">
          <h2>Conheça Nossa Equipe</h2>
          <p>Apaixonados por música que trabalham todos os dias para criar a melhor experiência para você.</p>
  
          <div className="team-grid">
            <div className="team-member">
              <div className="team-avatar">
                <img src={mariana} alt="Mariana" />
              </div>
              <div className="team-icon">♪</div>
              <h3>Marina Santos</h3>
              <p>CEO & Co-fundadora</p>
            </div>
  
            <div className="team-member">
              <div className="team-avatar">
                <img src={isa} alt="Carlos" />
              </div>
              <div className="team-icon">✨</div>
              <h3>Carlos Oliveira</h3>
              <p>CTO</p>
            </div>
  
            <div className="team-member">
              <div className="team-avatar">
                <img src={ana} alt="Ana" />
              </div>
              <div className="team-icon">♥</div>
              <h3>Ana Costa</h3>
              <p>Head of Design</p>
            </div>
          </div>
        </section>
  
        {/* Missão e Valores */}
        <section className="missao-valores">
          <div className="missao-header">
            <div className="missao-text">
              <h2>Nossa Missão e Valores</h2>
              <p>
                Transformar a forma como as pessoas se conectam através da música, criando uma comunidade global unida
                pelo amor aos sons.
              </p>
              <p>
                Acreditamos que a música é a linguagem universal que transcende fronteiras, culturas e diferenças. Nossa
                missão é criar um espaço onde todos possam descobrir, compartilhar e celebrar a música juntos.
              </p>
            </div>
            <div className="missao-image">
              <img src={sobre} alt="Missão e Valores" />
            </div>
          </div>
  
          <div className="valores-grid">
            <div className="valor-card">
              <div className="valor-icon">👥</div>
              <h3>Diversidade</h3>
              <p>Criamos um espaço inclusivo para todos.</p>
            </div>
            <div className="valor-card">
              <div className="valor-icon">✨</div>
              <h3>Criatividade</h3>
              <p>Incentivamos a descoberta e experimentação musical.</p>
            </div>
            <div className="valor-card">
              <div className="valor-icon">♥</div>
              <h3>Autenticidade</h3>
              <p>Valorizamos conexões genuínas e experiências reais.</p>
            </div>
            <div className="valor-card">
              <div className="valor-icon">🎯</div>
              <h3>Inovação</h3>
              <p>Buscamos constantemente novas formas de melhorar a experiência musical.</p>
            </div>
          </div>
        </section>
  
        {/* Efeito Echo */}
        <section className="efeito-echo">
        <h2>O Efeito Echo</h2>
        <p>Onde vidas são transformadas através da música. Descubra histórias reais de nossa comunidade.</p>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="testimonial-avatar">PA</div>
              <div className="testimonial-info">
                <h4>Pedro Almeida</h4>
                <p>Usuário desde 2022</p>
              </div>
            </div>
            <p className="testimonial-text">
              "O Echo Music mudou minha forma de ouvir música. Conheci pessoas incríveis que compartilham os mesmos
              gostos musicais e descobri artistas que nunca teria encontrado sozinho."
            </p>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="testimonial-avatar">AC</div>
              <div className="testimonial-info">
                <h4>Ana Costa</h4>
                <p>Artista Independente</p>
              </div>
            </div>
            <p className="testimonial-text">
              "Como artista independente, o Echo Music me deu uma plataforma para alcançar fãs reais que realmente se
              importam com minha música. A comunidade aqui é incrível!"
            </p>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="testimonial-avatar">LO</div>
              <div className="testimonial-info">
                <h4>Lucas Oliveira</h4>
                <p>DJ & Produtor</p>
              </div>
            </div>
            <p className="testimonial-text">
              "As Salas ao Vivo são revolucionárias! Consigo fazer sets ao vivo e interagir com minha audiência em tempo
              real. É como estar em um clube, mas global."
            </p>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">2.3M+</div>
            <div className="stat-label">Usuários Ativos</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">150K+</div>
            <div className="stat-label">Músicas Disponíveis</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">50M+</div>
            <div className="stat-label">Streams Mensais</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">25K+</div>
            <div className="stat-label">Artistas Ativos</div>
          </div>
        </div>
      </section>
  
        {/* CTA */}
        <section className="cta-section">
        <h2>Faça Parte da Revolução Musical</h2>
        <p>
        Junte-se a milhões de pessoas que já descobriram que a música soa melhor quando
        compartilhada. Sua próxima descoberta musical favorita está esperando por você.
        </p>
        <div className="cta-buttons">
          <button className="btn btn-primary">Começar Agora</button>
          <button className="btn btn-outline">Explorar Comunidades</button>
        </div>
      </section>
    </div>
  )
}