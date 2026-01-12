import React from "react";
import { Link } from "react-router-dom";
import "./CursoCard.css";

const CursoCard = ({ curso, area }) => {
  return (
    <div className="curso-card" style={{ borderTopColor: area.cor }}>
      <div className="curso-card-header">
        <span className="curso-icon">{area.icon}</span>
        <div className="curso-category">{area.nome}</div>
      </div>
      
      <div className="curso-card-content">
        <h3 className="curso-title">{curso.nome}</h3>
        <p className="curso-description">{curso.descricao}</p>
        
        <div className="curso-details">
          <div className="detail-item">
            <span className="detail-label">⏱️ Duração:</span>
            <span className="detail-value">{curso.duracao}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">📜 Certificação:</span>
            <span className="detail-value">{curso.certificacao}</span>
          </div>
        </div>
        
        {curso.saidas && curso.saidas.length > 0 && (
          <div className="saidas-profissionais">
            <strong>💼 Saídas:</strong>
            <div className="saidas-tags">
              {curso.saidas.slice(0, 3).map((saida, index) => (
                <span key={index} className="saida-tag">{saida}</span>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className="curso-card-footer">
        <Link to={`/cursos/${curso.id}`} className="btn-saiba-mais">
          Ver Curso Completo →
        </Link>
        <button className="btn-inscricao" onClick={() => alert('Inscrição em breve!')}>
          🎯 Inscrever-se
        </button>
      </div>
    </div>
  );
};

export default CursoCard;
