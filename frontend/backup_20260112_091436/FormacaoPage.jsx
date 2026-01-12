import React from "react";
import { Link } from "react-router-dom";
import "./FormacaoPage.css";
import cursosConfig from "../config/cursosConfig";

const FormacaoPage = () => {
  return (
    <div className="formacao-page">
      <h1>Formação Acadêmica</h1>
      
      <div className="cursos-grid">
        {cursosConfig.map((curso, index) => (
          <div key={index} className="curso-card">
            <h2>{curso.titulo}</h2>
            <p><strong>Instituição:</strong> {curso.instituicao}</p>
            <p><strong>Período:</strong> {curso.periodo}</p>
            <p><strong>Status:</strong> {curso.status}</p>
            {curso.descricao && <p>{curso.descricao}</p>}
            {curso.link && (
              <Link to={curso.link} className="saiba-mais-btn">
                Ver Curso Completo →
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormacaoPage;
