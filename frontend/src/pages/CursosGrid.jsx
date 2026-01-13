// src/pages/CursosGrid.jsx - VERSÃO MELHORADA (MESMA FUNCIONALIDADE)
import React from "react";
import CursoCard from "./CursoCard";
import "./CursosGrid.css";

const CursosGrid = ({ cursos, areas }) => {
  if (!cursos || cursos.length === 0) {
    return (
      <div className="no-cursos">
        <p>Não há cursos disponíveis no momento.</p>
      </div>
    );
  }

  return (
    <div className="cursos-grid-container">
      
      {/* CABEÇALHO MELHORADO */}
      <div className="cursos-header">
        <h1>Nossa Oferta Formativa</h1>
        <p>Selecione um curso para ver detalhes completos</p>
      </div>

      {/* GRID DE CURSOS - MANTENDO EXATAMENTE A MESMA LÓGICA */}
      <div className="cursos-grid">
        {cursos.map((curso) => {
          const area = areas.find(a => a.id === curso.areaId);
          return (
            <div key={curso.id} className="curso-grid-item">
              <CursoCard curso={curso} area={area} />
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default CursosGrid;
