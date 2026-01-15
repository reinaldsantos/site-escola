// src/pages/FormacaoPage.jsx - VERSÃO ATUALIZADA COM SUAS IMAGENS
import React from "react";
import { Link } from "react-router-dom";
import "./FormacaoPage.css";
import cursosConfig from "../config/cursosConfig";

const FormacaoPage = () => {
  // IMAGENS - USA AS SUAS 6 IMAGENS REAIS + 1 ONLINE
  const getImagemCurso = (cursoId) => {
    const imagensLocais = {
      1: "/images/cursos/industrial2.png",        // Manutenção Industrial
      2: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400&h=200&fit=crop&q=80", // Mecatrónica Automóvel
      3: "/images/cursos/cozinhaAI2.png",         // Padeiro/Pasteleiro
      4: "/images/cursos/trbAI2.png",             // Empregado Restaurante/Bar
      5: "/images/cursos/construcaoAI.png",       // Construção Civil
      6: "/images/cursos/informaticaAI.png",      // Programação Informática
      7: "/images/cursos/comercioAI.png",         // Comércio
      8: "/images/cursos/cozinhaAI2.png"          // Cozinha/Pastelaria (usa mesma)
    };

    // Retorna imagem local ou fallback online
    return imagensLocais[cursoId] || "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=200&fit=crop&q=80";
  };

  // Função para fallback de imagem
  const handleImageError = (e, cursoNome) => {
    console.log(`Imagem falhou: ${cursoNome}`);
    e.target.onerror = null;
    e.target.src = `https://placehold.co/400x200/1a237e/ffffff?text=${encodeURIComponent(cursoNome)}`;
  };

  return (
    <div className="formacao-profissional">
      {/* HERO SECTION */}
      <section className="formacao-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Formação Profissional</h1>
            <p className="hero-subtitle">
              Educação que transforma vidas. Carreiras que constroem o futuro.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE CURSOS */}
      <section className="cursos-section">
        <div className="container">
          <div className="section-header">
            <h2>Cursos Disponíveis</h2>
            <p className="section-description">
              Formação técnica especializada com certificação reconhecida
            </p>
          </div>

          {/* LISTA DE CURSOS */}
          <div className="cursos-lista">
            {cursosConfig.areas.map((area) => (
              <React.Fragment key={area.id}>
                {area.cursos.map((curso) => (
                  <div className="curso-item" key={curso.id}>
                    <div className="curso-header">
                      <span className="curso-categoria" style={{ color: area.cor }}>
                        {area.nome}
                      </span>
                      <span className="curso-codigo">{curso.codigo || `EPF-${curso.id}`}</span>
                    </div>
                    
                    <div className="curso-conteudo">
                      <div className="curso-imagem">
                        <img 
                          src={getImagemCurso(curso.id)} 
                          alt={curso.nome}
                          loading="lazy"
                          onError={(e) => handleImageError(e, curso.nome)}
                        />
                      </div>
                      
                      <div className="curso-info">
                        <h3 className="curso-titulo">{curso.nome}</h3>
                        <p className="curso-descricao">{curso.descricao}</p>
                        
                        <div className="curso-detalhes">
                          <div className="detalhe">
                            <span className="detalhe-rotulo">Duração</span>
                            <span className="detalhe-valor">{curso.duracao}</span>
                          </div>
                          <div className="detalhe">
                            <span className="detalhe-rotulo">Certificação</span>
                            <span className="detalhe-valor">{curso.certificacao}</span>
                          </div>
                          <div className="detalhe">
                            <span className="detalhe-rotulo">Nível</span>
                            <span className="detalhe-valor">Nível {curso.nivel || "4"}</span>
                          </div>
                        </div>
                        
                        {curso.saidas && curso.saidas.length > 0 && (
                          <div className="curso-saidas">
                            <h4>Saídas Profissionais</h4>
                            <div className="saidas-lista">
                              {curso.saidas.slice(0, 3).map((saida, index) => (
                                <span key={index} className="saida-item">{saida}</span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        <div className="curso-acoes">
                          <Link to={`/cursos/${curso.id}`} className="btn btn-detalhes">
                            Ver Detalhes
                          </Link>
                          <Link to="/inscricao" className="btn btn-inscricao">
                            Pré-inscrição
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO DE VANTAGENS */}
      <section className="vantagens-section">
        <div className="container">
          <div className="section-header">
            <h2>Porquê escolher a EPF</h2>
            <p className="section-description">
              A excelência na formação profissional há mais de 25 anos
            </p>
          </div>
          
          <div className="vantagens-lista">
            <div className="vantagem-item">
              <div className="vantagem-icone">📄</div>
              <div className="vantagem-conteudo">
                <h3>Certificação Oficial</h3>
                <p>Diploma reconhecido nacionalmente com equivalência ao 12º ano</p>
              </div>
            </div>
            
            <div className="vantagem-item">
              <div className="vantagem-icone">💼</div>
              <div className="vantagem-conteudo">
                <h3>Estágio Garantido</h3>
                <p>Experiência prática em empresas parceiras com possibilidade de contrato</p>
              </div>
            </div>
            
            <div className="vantagem-item">
              <div className="vantagem-icone">🌍</div>
              <div className="vantagem-conteudo">
                <h3>Programa Erasmus+</h3>
                <p>Mobilidade internacional em países europeus</p>
              </div>
            </div>
            
            <div className="vantagem-item">
              <div className="vantagem-icone">👨‍🏫</div>
              <div className="vantagem-conteudo">
                <h3>Corpo Docente Especializado</h3>
                <p>Professores com vasta experiência profissional</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-conteudo">
            <h2>Pronto para iniciar a sua formação?</h2>
            <p>Contacte-nos para mais informações ou proceda à sua pré-inscrição</p>
            <div className="cta-botoes">
              <Link to="/contactos" className="btn btn-secundario">
                Contactar Secretaria
              </Link>
              <Link to="/inscricao" className="btn btn-primario">
                Pré-inscrição Online
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormacaoPage;