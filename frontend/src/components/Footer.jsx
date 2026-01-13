// src/components/Footer.jsx - VERSÃO SIMPLIFICADA E ATUALIZADA
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: "#003366",
      color: "#FFFFFF",
      padding: "40px 20px 20px",
      marginTop: "auto",
      fontFamily: "'Segoe UI', system-ui, sans-serif"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto"
      }}>

        {/* CONTEÚDO PRINCIPAL - 2 COLUNAS APENAS */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr", "@media (max-width: 768px)": { gridTemplateColumns: "1fr", gap: "30px" },
          gap: "40px",
          marginBottom: "30px"
        }}>

          {/* COLUNA ESQUERDA: SOBRE A ESCOLA */}
          <div>
            <div style={{
              marginBottom: "20px"
            }}>
              <h3 style={{
                color: "#FFFFFF",
                margin: "0 0 5px 0",
                fontSize: "1.8rem",
                fontWeight: "bold"
              }}>
                EPF
              </h3>
              <p style={{
                margin: "0",
                fontSize: "1rem",
                opacity: "0.9"
              }}>
                Escola Profissional do Fundão
              </p>
            </div>
            <p style={{
              lineHeight: "1.6",
              opacity: "0.9",
              marginBottom: "20px",
              fontSize: "0.95rem"
            }}>
              Formação profissional de excelência com certificação
              reconhecida nacionalmente. Educação que transforma vidas.
            </p>
            <div style={{
              display: "flex",
              gap: "15px",
              marginTop: "20px"
            }}>
              <a 
                href="https://www.facebook.com/EscolaProfissionalFundao" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: "#FFFFFF",
                  textDecoration: "none",
                  background: "rgba(255, 255, 255, 0.1)",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  fontSize: "0.9rem",
                  transition: "all 0.3s ease",
                  border: "1px solid rgba(255, 255, 255, 0.2)"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Facebook
              </a>
              <a 
                href="https://www.instagram.com/escolaprofissionalfundao/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: "#FFFFFF",
                  textDecoration: "none",
                  background: "rgba(255, 255, 255, 0.1)",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  fontSize: "0.9rem",
                  transition: "all 0.3s ease",
                  border: "1px solid rgba(255, 255, 255, 0.2)"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Instagram
              </a>
            </div>
          </div>

          {/* COLUNA DIREITA: CONTACTOS */}
          <div>
            <h4 style={{
              color: "#FFFFFF",
              marginBottom: "20px",
              fontSize: "1.2rem",
              fontWeight: "600"
            }}>
              CONTACTOS
            </h4>
            
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px"
            }}>
              {/* ENDEREÇO */}
              <div style={{ display: "flex", gap: "12px" }}>
                <div style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  width: "40px",
                  height: "40px",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: "0"
                }}>
                  <span style={{ fontSize: "1.2rem", color: "#FFFFFF" }}>📍</span>
                </div>
                <div>
                  <div style={{ fontWeight: "600", color: "#FFFFFF", fontSize: "0.9rem" }}>ENDEREÇO</div>
                  <div style={{ opacity: "0.9", fontSize: "0.9rem" }}>R. Cidade de Salamanca 1</div>        
                  <div style={{ opacity: "0.9", fontSize: "0.9rem" }}>6230-370 Fundão, Portugal</div>
                </div>
              </div>

              {/* TELEFONE */}
              <div style={{ display: "flex", gap: "12px" }}>
                <div style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  width: "40px",
                  height: "40px",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: "0"
                }}>
                  <span style={{ fontSize: "1.2rem", color: "#FFFFFF" }}>📞</span>
                </div>
                <div>
                  <div style={{ fontWeight: "600", color: "#FFFFFF", fontSize: "0.9rem" }}>TELEFONE</div>
                  <div style={{ opacity: "0.9", fontSize: "0.9rem" }}>275 779 050</div>
                </div>
              </div>

              {/* EMAIL */}
              <div style={{ display: "flex", gap: "12px" }}>
                <div style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  width: "40px",
                  height: "40px",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: "0"
                }}>
                  <span style={{ fontSize: "1.2rem", color: "#FFFFFF" }}>✉️</span>
                </div>
                <div>
                  <div style={{ fontWeight: "600", color: "#FFFFFF", fontSize: "0.9rem" }}>EMAIL</div>
                  <div style={{ opacity: "0.9", fontSize: "0.9rem" }}>geral@epf.pt</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LINHA DIVISÓRIA */}
        <div style={{
          height: "1px",
          background: "rgba(255, 255, 255, 0.2)",
          margin: "20px 0"
        }}></div>

        {/* RODAPÉ INFERIOR */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "10px"
        }}>
          <div style={{
            opacity: "0.8",
            fontSize: "0.9rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            flexWrap: "wrap",
            justifyContent: "center"
          }}>
            <span>© {currentYear} Escola Profissional do Fundão</span>
            <span style={{ color: "#FFFFFF", opacity: "0.7" }}>•</span>        
            <span>Todos os direitos reservados</span>
          </div>
          
          <div style={{
            display: "flex",
            gap: "20px",
            marginTop: "10px"
          }}>
            <Link to="/privacidade" style={{
              color: "#FFFFFF",
              textDecoration: "none",
              opacity: "0.8",
              fontSize: "0.85rem",
              transition: "all 0.3s ease"
            }}
            onMouseOver={(e) => e.currentTarget.style.opacity = "1"}
            onMouseOut={(e) => e.currentTarget.style.opacity = "0.8"}
            >
              Política de Privacidade
            </Link>
            <Link to="/termos" style={{
              color: "#FFFFFF",
              textDecoration: "none",
              opacity: "0.8",
              fontSize: "0.85rem",
              transition: "all 0.3s ease"
            }}
            onMouseOver={(e) => e.currentTarget.style.opacity = "1"}
            onMouseOut={(e) => e.currentTarget.style.opacity = "0.8"}
            >
              Termos de Utilização
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

