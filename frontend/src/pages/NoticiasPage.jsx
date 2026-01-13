// src/pages/NoticiasPage.jsx - VERSÃO PROFISSIONAL
import React from "react";
import { useState } from "react";
import ContentUniversal from "../components/ContentUniversal";
import "./NoticiasPage.css";

const NoticiasPage = () => {
  const [abaAtiva, setAbaAtiva] = useState('noticias');

  const abas = [
    { id: 'noticias', label: 'Notícias', icon: '📰' },
    { id: 'eventos', label: 'Eventos', icon: '📅' },
    { id: 'avisos', label: 'Avisos', icon: '📢' }
  ];

  return (
    <div className="noticias-page">
      {/* Cabeçalho */}
      <header className="noticias-header">
        <h1>📰 Centro de Informações</h1>
        <p className="subtitulo">
          Mantenha-se atualizado com as últimas notícias, eventos e avisos da Escola Profissional do Fundão
        </p>
      </header>

      {/* Abas de navegação */}
      <div className="abas-container">
        <div className="abas">
          {abas.map(aba => (
            <button
              key={aba.id}
              className={`aba-btn ${abaAtiva === aba.id ? 'ativa' : ''}`}
              onClick={() => setAbaAtiva(aba.id)}
            >
              <span className="aba-icon">{aba.icon}</span>
              <span className="aba-label">{aba.label}</span>
              {abaAtiva === aba.id && <span className="aba-indicador"></span>}
            </button>
          ))}
        </div>
      </div>

      {/* Conteúdo das abas */}
      <div className="conteudo-abas">
        {abaAtiva === 'noticias' && (
          <div className="aba-conteudo">
            <ContentUniversal
              collectionName="noticias"
              title="📰 ÚLTIMAS NOTÍCIAS"
              limit={12}
              showDate={true}
              showDescription={true}
              showViewAll={false}  // Não mostrar "Ver todos" já que estamos na página de todos
            />
          </div>
        )}

        {abaAtiva === 'eventos' && (
          <div className="aba-conteudo">
            <ContentUniversal
              collectionName="eventos"
              title="📅 PRÓXIMOS EVENTOS"
              limit={12}
              showDate={true}
              showDescription={true}
              showViewAll={false}
            />
          </div>
        )}

        {abaAtiva === 'avisos' && (
          <div className="aba-conteudo">
            <ContentUniversal
              collectionName="avisos"
              title="📢 AVISOS IMPORTANTES"
              limit={12}
              showDate={true}
              showDescription={true}
              showViewAll={false}
            />
          </div>
        )}
      </div>

      {/* Seção de destaque */}
      <div className="destaque-section">
        <div className="destaque-card">
          <div className="destaque-icon">💡</div>
          <div className="destaque-conteudo">
            <h3>Mantenha-se Conectado</h3>
            <p>
              Todas as informações são atualizadas automaticamente através do nosso sistema Strapi.
              Para mais informações, contacte a secretaria da escola.
            </p>
            <a href="/contactos" className="destaque-link">
              📞 Contactar Secretaria →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticiasPage;

