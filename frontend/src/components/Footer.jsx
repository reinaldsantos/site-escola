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

        {/* CONTEÚDO PRINCIPAL - 2 COLUNAS */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          "@media (max-width: 768px)": { gridTemplateColumns: "1fr", gap: "30px" },
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

          {/* COLUNA DIREITA: CONTACTOS COM ÍCONES */}
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
                  {/* Ícone Localização SVG */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
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
                  {/* Ícone Telefone SVG */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
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
                  {/* Ícone Email SVG */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight: "600", color: "#FFFFFF", fontSize: "0.9rem" }}>EMAIL</div>
                  <div style={{ opacity: "0.9", fontSize: "0.9rem" }}>escola@epfundao.edu.pt</div>
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
            <Link to="/escola/politica-privacidade" style={{
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
            <Link to="/escola/regulamento-interno" style={{
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