// src/pages/Cursos/CursoDetalhe.jsx
import React from "react";
import { useParams } from "react-router-dom";

const CursoDetalhe = () => {
  const { cursoId } = useParams();
  
  return (
    <div className="container" style={{ padding: "40px" }}>
      <h1>🎓 Detalhes do Curso</h1>
      <p>ID do curso: {cursoId}</p>
      <p>Esta página mostrará os detalhes completos do curso selecionado.</p>
      <div style={{ background: "#f8f9fa", padding: "20px", borderRadius: "10px", marginTop: "20px" }}>
        <h3>Funcionalidades em breve:</h3>
        <ul>
          <li>Informações completas do curso</li>
          <li>Plano de estudos</li>
          <li>Professores</li>
          <li>Horários</li>
          <li>Inscrições</li>
        </ul>
      </div>
    </div>
  );
};

export default CursoDetalhe;
