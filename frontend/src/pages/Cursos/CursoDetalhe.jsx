import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import cursosConfig from "../../config/cursosConfig";

const CursoDetalhe = () => {
  const { cursoId } = useParams();
  const [curso, setCurso] = useState(null);
  const [area, setArea] = useState(null);

  useEffect(() => {
    const buscarCurso = () => {
      for (const areaItem of cursosConfig.areas) {
        const cursoEncontrado = areaItem.cursos.find(c => c.id.toString() === cursoId);
        if (cursoEncontrado) {
          setCurso(cursoEncontrado);
          setArea(areaItem);
          break;
        }
      }
    };

    buscarCurso();
  }, [cursoId]);

  if (!curso || !area) {
    return (
      <div style={{ padding: '4rem', textAlign: 'center' }}>
        <h2>Curso não encontrado</h2>
        <Link to="/formacao" style={{ color: '#004a8f' }}>
          ← Voltar para Cursos
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      {/* HEADER */}
      <div style={{ 
        background: area.cor, 
        color: 'white', 
        padding: '3rem', 
        borderRadius: '15px',
        marginBottom: '2rem'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
          {curso.nome}
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
          {area.nome} • {curso.duracao} • {curso.certificacao}
        </p>
      </div>

      {/* CONTEÚDO */}
      <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '2rem' }}>
        {/* SIDEBAR */}
        <aside>
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            marginBottom: '1rem'
          }}>
            <h3 style={{ marginTop: 0 }}>Informações</h3>
            <p><strong>Duração:</strong> {curso.duracao}</p>
            <p><strong>Certificação:</strong> {curso.certificacao}</p>
            <p><strong>Área:</strong> {area.nome}</p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button style={{
              background: '#27ae60',
              color: 'white',
              border: 'none',
              padding: '1rem',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              🎯 Inscrever-se
            </button>
            
            <Link to="/formacao" style={{
              background: 'transparent',
              color: '#004a8f',
              border: '2px solid #004a8f',
              padding: '1rem',
              borderRadius: '8px',
              textAlign: 'center',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}>
              ← Ver Todos os Cursos
            </Link>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main style={{ 
          background: 'white', 
          padding: '2rem', 
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}>
          <h2>Descrição</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#555' }}>
            {curso.descricao}
          </p>

          <h3>Objetivos</h3>
          <ul>
            <li>Formar profissionais qualificados</li>
            <li>Desenvolver competências técnicas</li>
            <li>Preparar para certificações</li>
            <li>Proporcionar experiência prática</li>
          </ul>

          <h3>Plano de Estudos</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            <div style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px' }}>
              <h4 style={{ marginTop: 0 }}>1º Ano</h4>
              <p>Fundamentos básicos</p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px' }}>
              <h4 style={{ marginTop: 0 }}>2º Ano</h4>
              <p>Especialização técnica</p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px' }}>
              <h4 style={{ marginTop: 0 }}>3º Ano</h4>
              <p>Estágio profissional</p>
            </div>
          </div>

          {curso.saidas && (
            <>
              <h3>Saídas Profissionais</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {curso.saidas.map((saida, index) => (
                  <span key={index} style={{
                    background: '#e3f2fd',
                    color: '#1565c0',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem'
                  }}>
                    {saida}
                  </span>
                ))}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default CursoDetalhe;

