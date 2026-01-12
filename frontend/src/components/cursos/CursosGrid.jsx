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
      <div className="cursos-grid-header">
        <h2>Nossa Oferta Formativa</h2>
        <p className="subtitle">Selecione um curso para ver detalhes completos</p>
      </div>
      
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
