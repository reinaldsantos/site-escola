// src/components/CursoCard.jsx - VERSÃO PROFISSIONAL
import React from "react";
import { Link } from "react-router-dom";
import "./CursoCard.css";

const CursoCard = ({ curso, area }) => {
  return (
    <div className="curso-card" style={{ borderTopColor: area.cor }}>
      {/* Cabeçalho */}
      <div className="curso-card-header">
        <div className="area-info">
          <div className="area-icon">{area.icon}</div>
          <span className="curso-category">{area.nome}</span>
        </div>
        <div className="curso-code">{curso.codigo || "N/A"}</div>
      </div>
      
      {/* Conteúdo */}
      <div className="curso-card-content">
        <h3 className="curso-title">{curso.nome}</h3>
        <p className="curso-description">{curso.descricao}</p>
        
        {/* Detalhes */}
        <div className="curso-details">
          <div className="detail-row">
            <span className="detail-label">DURAÇÃO:</span>
            <span className="detail-value">{curso.duracao}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">CERTIFICAÇÃO:</span>
            <span className="detail-value">{curso.certificacao}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">NÍVEL:</span>
            <span className="detail-value">Nível {curso.nivel || "4"}</span>
          </div>
        </div>
        
        {/* Saídas Profissionais */}
        {curso.saidas && curso.saidas.length > 0 && (
          <div className="saidas-profissionais">
            <div className="saidas-title">SAÍDAS PROFISSIONAIS</div>
            <div className="saidas-tags">
              {curso.saidas.slice(0, 4).map((saida, index) => (
                <span key={index} className="saida-tag">{saida}</span>
              ))}
              {curso.saidas.length > 4 && (
                <span className="saida-tag">+{curso.saidas.length - 4}</span>
              )}
            </div>
          </div>
        )}
      </div>
      
      {/* Rodapé */}
      <div className="curso-card-footer">
        <Link to={`/cursos/${curso.id}`} className="btn-detalhes">
          VER DETALHES
        </Link>
        <button 
          className="btn-inscricao" 
          onClick={() => alert('Inscrições em breve disponíveis!')}
        >
          PRÉ-INSCRIÇÃO
        </button>
      </div>
    </div>
  );
};

export default CursoCard;
