import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

// COMPONENTE DE NOTÍCIAS DO STRAPI
import NoticiasStrapi from "../components/NoticiasStrapi";

const HomePage = () => {
  return (
    <div className="home-funcional">
      {/* Hero Section - SEU CÓDIGO ORIGINAL (MANTIDO) */}
      <div className="hero-fundo">
        <div className="hero-conteudo">
          <h1>ESCOLA PROFISSIONAL DO FUNDÃO</h1>
          <p className="slogan">#PROXIMIDADE • #QUALIDADE • #LomodEFF</p>

          <div className="hero-botoes">
            <Link to="/formacao" className="btn-cursos">
              VER CURSOS
            </Link>
            <Link to="/inscricao" className="btn-inscricao">
              INSCRIÇÕES 25/26
            </Link>
          </div>
        </div>
      </div>

      {/* NOTÍCIAS DO STRAPI - COMPONENTE ADICIONADO */}
      <NoticiasStrapi limite={3} estilo="padrao" />

      {/* Estatísticas - SEU CÓDIGO ORIGINAL (MANTIDO) */}
      <div className="estatisticas">
        <div className="estatistica">
          <div className="numero">30+</div>
          <div className="texto">ANOS</div>
        </div>
        <div className="estatistica">
          <div className="numero">92%</div>
          <div className="texto">EMPREGO</div>
        </div>
        <div className="estatistica">
          <div className="numero">15</div>
          <div className="texto">CURSOS</div>
        </div>
        <div className="estatistica">
          <div className="numero">100%</div>
          <div className="texto">ESTÁGIO</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

