// src/pages/CursosPage.jsx - VERSÃO ATUALIZADA
import React from "react";
import ContentUniversal from "../components/ContentUniversal";
import "./CursosPage.css";

const CursosPage = () => {
  return (
    <div className="cursos-page">
      {/* Cabeçalho */}
      <header className="cursos-header">
        <h1>🎓 Catálogo de Cursos</h1>
        <p className="subtitulo">
          Descubra todas as formações profissionais disponíveis na Escola Profissional do Fundão
        </p>
        <div className="cursos-stats">
          <div className="stat">
            <span className="stat-number">+10</span>
            <span className="stat-label">Cursos Disponíveis</span>
          </div>
          <div className="stat">
            <span className="stat-number">100%</span>
            <span className="stat-label">Práticos</span>
          </div>
          <div className="stat">
            <span className="stat-number">✓</span>
            <span className="stat-label">Certificação</span>
          </div>
        </div>
      </header>

      {/* Todos os cursos */}
      <div className="cursos-container">
        <ContentUniversal
          collectionName="cursos"
          title="🎓 TODOS OS CURSOS"
          limit={20}
          showDate={false}
          showDescription={true}
          showViewAll={false}  // Já estamos na página de todos
        />
      </div>

      {/* Informações adicionais */}
      <div className="info-section">
        <div className="info-card">
          <h3>ℹ️ Como Funciona</h3>
          <p>
            Todos os cursos são carregados automaticamente do nosso sistema Strapi.
            Para se inscrever ou obter mais informações, contacte a secretaria.
          </p>
          <a href="/contactos" className="info-link">
            📞 Falar com Secretaria →
          </a>
        </div>
        
        <div className="info-card">
          <h3>📋 Processo de Inscrição</h3>
          <ol>
            <li>Escolha o curso desejado</li>
            <li>Contacte a secretaria</li>
            <li>Entregue documentação necessária</li>
            <li>Confirmação da matrícula</li>
          </ol>
          <a href="/formacao" className="info-link">
            📚 Ver Mais Detalhes →
          </a>
        </div>
      </div>
    </div>
  );
};

export default CursosPage;
