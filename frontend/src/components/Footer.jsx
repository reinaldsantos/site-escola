// src/components/Footer.jsx - VERDE SUAVE + BRANCO
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // CORES - VERDE SUAVE + BRANCO
  const cores = {
    verdePrincipal: "#2E8B57",     // Sea Green - suave
    verdeSecundario: "#3CB371",    // Medium Sea Green
    verdeClaro: "#66CDAA",         // Medium Aquamarine
    branco: "#FFFFFF",
    brancoOff: "#F8F9FA",
    cinzaClaro: "#E9ECEF"
  };

  return (
    <footer style={{
      background: `linear-gradient(135deg, ${cores.verdePrincipal} 0%, #2A7F52 100%)`,
      color: cores.branco,
      padding: "3rem 1rem 1.5rem",
      marginTop: "auto",
      borderTop: `3px solid ${cores.branco}`,
      fontFamily: "'Segoe UI', system-ui, sans-serif"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto"
      }}>

        {/* CONTEÚDO PRINCIPAL - 4 COLUNAS */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2.5rem",
          marginBottom: "3rem"
        }}>

          {/* COLUNA 1: SOBRE A ESCOLA */}
          <div>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "1.5rem"
            }}>
              <div style={{
                fontSize: "2.5rem",
                color: cores.branco
              }}>
                🎓
              </div>
              <div>
                <h3 style={{ 
                  color: cores.branco,
                  margin: "0",
                  fontSize: "1.5rem",
                  fontWeight: "bold"
                }}>
                  EPF
                </h3>
                <p style={{
                  margin: "0",
                  fontSize: "0.9rem",
                  opacity: "0.9"
                }}>
                  Escola Profissional
                </p>
              </div>
            </div>
            <p style={{
              lineHeight: "1.6",
              opacity: "0.9",
              marginBottom: "1.5rem"
            }}>
              Formação profissional de excelência com certificação 
              reconhecida nacionalmente. Educação que transforma vidas.
            </p>
            <div style={{
              display: "flex",
              gap: "1rem",
              marginTop: "1.5rem"
            }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{
                background: cores.branco,
                color: cores.verdePrincipal,
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                transition: "all 0.3s ease",
                border: `1px solid ${cores.branco}`
              }} onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.background = cores.verdeClaro;
                e.currentTarget.style.color = cores.branco;
              }} onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.background = cores.branco;
                e.currentTarget.style.color = cores.verdePrincipal;
              }}>
                <span style={{ fontSize: "1.1rem" }}>📘</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{
                background: cores.branco,
                color: cores.verdePrincipal,
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                transition: "all 0.3s ease",
                border: `1px solid ${cores.branco}`
              }} onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.background = cores.verdeClaro;
                e.currentTarget.style.color = cores.branco;
              }} onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.background = cores.branco;
                e.currentTarget.style.color = cores.verdePrincipal;
              }}>
                <span style={{ fontSize: "1.1rem" }}>📷</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{
                background: cores.branco,
                color: cores.verdePrincipal,
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                transition: "all 0.3s ease",
                border: `1px solid ${cores.branco}`
              }} onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.background = cores.verdeClaro;
                e.currentTarget.style.color = cores.branco;
              }} onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.background = cores.branco;
                e.currentTarget.style.color = cores.verdePrincipal;
              }}>
                <span style={{ fontSize: "1.1rem" }}>💼</span>
              </a>
            </div>
          </div>

          {/* COLUNA 2: LINKS RÁPIDOS */}
          <div>
            <h4 style={{
              color: cores.branco,
              marginBottom: "1.5rem",
              fontSize: "1.2rem",
              fontWeight: "600",
              borderBottom: `2px solid ${cores.branco}40`,
              paddingBottom: "0.5rem"
            }}>
              📋 Links Rápidos
            </h4>
            <ul style={{
              listStyle: "none",
              padding: "0",
              margin: "0"
            }}>
              <li style={{ marginBottom: "0.8rem" }}>
                <Link to="/" style={{
                  color: cores.branco,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  opacity: "0.9",
                  transition: "all 0.3s ease"
                }} onMouseOver={(e) => { 
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.paddingLeft = "5px";
                  e.currentTarget.style.color = cores.cinzaClaro;
                }} onMouseOut={(e) => { 
                  e.currentTarget.style.opacity = "0.9";
                  e.currentTarget.style.paddingLeft = "0";
                  e.currentTarget.style.color = cores.branco;
                }}>
                  <span>🏠</span> Início
                </Link>
              </li>
              <li style={{ marginBottom: "0.8rem" }}>
                <Link to="/formacao" style={{
                  color: cores.branco,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  opacity: "0.9",
                  transition: "all 0.3s ease"
                }} onMouseOver={(e) => { 
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.paddingLeft = "5px";
                  e.currentTarget.style.color = cores.cinzaClaro;
                }} onMouseOut={(e) => { 
                  e.currentTarget.style.opacity = "0.9";
                  e.currentTarget.style.paddingLeft = "0";
                  e.currentTarget.style.color = cores.branco;
                }}>
                  <span>🎓</span> Formação
                </Link>
              </li>
              <li style={{ marginBottom: "0.8rem" }}>
                <Link to="/escola" style={{
                  color: cores.branco,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  opacity: "0.9",
                  transition: "all 0.3s ease"
                }} onMouseOver={(e) => { 
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.paddingLeft = "5px";
                  e.currentTarget.style.color = cores.cinzaClaro;
                }} onMouseOut={(e) => { 
                  e.currentTarget.style.opacity = "0.9";
                  e.currentTarget.style.paddingLeft = "0";
                  e.currentTarget.style.color = cores.branco;
                }}>
                  <span>🏫</span> Escola
                </Link>
              </li>
              <li style={{ marginBottom: "0.8rem" }}>
                <Link to="/erasmus" style={{
                  color: cores.branco,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  opacity: "0.9",
                  transition: "all 0.3s ease"
                }} onMouseOver={(e) => { 
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.paddingLeft = "5px";
                  e.currentTarget.style.color = cores.cinzaClaro;
                }} onMouseOut={(e) => { 
                  e.currentTarget.style.opacity = "0.9";
                  e.currentTarget.style.paddingLeft = "0";
                  e.currentTarget.style.color = cores.branco;
                }}>
                  <span>🌍</span> Erasmus+
                </Link>
              </li>
              <li style={{ marginBottom: "0.8rem" }}>
                <Link to="/contactos" style={{
                  color: cores.branco,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  opacity: "0.9",
                  transition: "all 0.3s ease"
                }} onMouseOver={(e) => { 
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.paddingLeft = "5px";
                  e.currentTarget.style.color = cores.cinzaClaro;
                }} onMouseOut={(e) => { 
                  e.currentTarget.style.opacity = "0.9";
                  e.currentTarget.style.paddingLeft = "0";
                  e.currentTarget.style.color = cores.branco;
                }}>
                  <span>📞</span> Contactos
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUNA 3: CURSOS */}
          <div>
            <h4 style={{
              color: cores.branco,
              marginBottom: "1.5rem",
              fontSize: "1.2rem",
              fontWeight: "600",
              borderBottom: `2px solid ${cores.branco}40`,
              paddingBottom: "0.5rem"
            }}>
              📚 Nossos Cursos
            </h4>
            <ul style={{
              listStyle: "none",
              padding: "0",
              margin: "0"
            }}>
              <li style={{ marginBottom: "0.8rem" }}>
                <span style={{
                  color: cores.branco,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  opacity: "0.9"
                }}>
                  <span>⚙️</span> Manutenção Industrial
                </span>
              </li>
              <li style={{ marginBottom: "0.8rem" }}>
                <span style={{
                  color: cores.branco,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  opacity: "0.9"
                }}>
                  <span>🚗</span> Mecatrónica Automóvel
                </span>
              </li>
              <li style={{ marginBottom: "0.8rem" }}>
                <span style={{
                  color: cores.branco,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  opacity: "0.9"
                }}>
                  <span>🍳</span> Cozinha/Pastelaria
                </span>
              </li>
              <li style={{ marginBottom: "0.8rem" }}>
                <span style={{
                  color: cores.branco,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  opacity: "0.9"
                }}>
                  <span>🏗️</span> Construção Civil
                </span>
              </li>
              <li style={{ marginBottom: "0.8rem" }}>
                <span style={{
                  color: cores.branco,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  opacity: "0.9"
                }}>
                  <span>💻</span> Informática
                </span>
              </li>
            </ul>
          </div>

          {/* COLUNA 4: CONTACTOS */}
          <div>
            <h4 style={{
              color: cores.branco,
              marginBottom: "1.5rem",
              fontSize: "1.2rem",
              fontWeight: "600",
              borderBottom: `2px solid ${cores.branco}40`,
              paddingBottom: "0.5rem"
            }}>
              📞 Contactos
            </h4>
            <ul style={{
              listStyle: "none",
              padding: "0",
              margin: "0"
            }}>
              <li style={{ marginBottom: "1.2rem", display: "flex", gap: "12px" }}>
                <div style={{
                  background: `${cores.branco}20`,
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: "0"
                }}>
                  <span style={{ fontSize: "1.2rem", color: cores.branco }}>📍</span>
                </div>
                <div>
                  <div style={{ fontWeight: "600", color: cores.branco }}>Endereço</div>
                  <div style={{ opacity: "0.9" }}>Rua da Escola, 123</div>
                  <div style={{ opacity: "0.9" }}>Cidade, Portugal</div>
                </div>
              </li>
              <li style={{ marginBottom: "1.2rem", display: "flex", gap: "12px" }}>
                <div style={{
                  background: `${cores.branco}20`,
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: "0"
                }}>
                  <span style={{ fontSize: "1.2rem", color: cores.branco }}>📞</span>
                </div>
                <div>
                  <div style={{ fontWeight: "600", color: cores.branco }}>Telefone</div>
                  <div style={{ opacity: "0.9" }}>+351 123 456 789</div>
                </div>
              </li>
              <li style={{ marginBottom: "1.2rem", display: "flex", gap: "12px" }}>
                <div style={{
                  background: `${cores.branco}20`,
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: "0"
                }}>
                  <span style={{ fontSize: "1.2rem", color: cores.branco }}>✉️</span>
                </div>
                <div>
                  <div style={{ fontWeight: "600", color: cores.branco }}>Email</div>
                  <div style={{ opacity: "0.9" }}>geral@epf.pt</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* LINHA DIVISÓRIA */}
        <div style={{
          height: "1px",
          background: `${cores.branco}30`,
          margin: "2rem 0"
        }}></div>

        {/* RODAPÉ INFERIOR */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "1rem"
        }}>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1.5rem",
            marginBottom: "1rem"
          }}>
            <Link to="/privacidade" style={{
              color: cores.branco,
              textDecoration: "none",
              opacity: "0.9",
              fontSize: "0.9rem",
              transition: "all 0.3s ease"
            }} onMouseOver={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.color = cores.cinzaClaro;
            }} onMouseOut={(e) => {
              e.currentTarget.style.opacity = "0.9";
              e.currentTarget.style.color = cores.branco;
            }}>
              Política de Privacidade
            </Link>
            <Link to="/termos" style={{
              color: cores.branco,
              textDecoration: "none",
              opacity: "0.9",
              fontSize: "0.9rem",
              transition: "all 0.3s ease"
            }} onMouseOver={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.color = cores.cinzaClaro;
            }} onMouseOut={(e) => {
              e.currentTarget.style.opacity = "0.9";
              e.currentTarget.style.color = cores.branco;
            }}>
              Termos de Utilização
            </Link>
            <a href="#top" style={{
              color: cores.branco,
              textDecoration: "none",
              opacity: "0.9",
              fontSize: "0.9rem",
              transition: "all 0.3s ease"
            }} onMouseOver={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.color = cores.cinzaClaro;
            }} onMouseOut={(e) => {
              e.currentTarget.style.opacity = "0.9";
              e.currentTarget.style.color = cores.branco;
            }}>
              Voltar ao Topo ↑
            </a>
          </div>

          <div style={{
            opacity: "0.8",
            fontSize: "0.9rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            flexWrap: "wrap",
            justifyContent: "center"
          }}>
            <span>© {currentYear} Escola Profissional - EPF</span>
            <span style={{ color: cores.branco, opacity: "0.7" }}>•</span>
            <span>Todos os direitos reservados</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
