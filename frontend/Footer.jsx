// src/components/Footer.jsx - VERSÃO COMPLETA E PROFISSIONAL
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #003366 0%, #001a33 100%)',
      color: 'white',
      padding: '3rem 1rem 1.5rem',
      marginTop: 'auto',
      borderTop: '3px solid #f8b133',
      fontFamily: "'Segoe UI', system-ui, sans-serif"
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>

        {/* CONTEÚDO PRINCIPAL - 4 COLUNAS */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>

          {/* COLUNA 1: SOBRE A ESCOLA */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                fontSize: '2.5rem',
                color: '#f8b133'
              }}>
                🎓
              </div>
              <div>
                <h3 style={{ 
                  color: '#f8b133',
                  margin: '0',
                  fontSize: '1.5rem',
                  fontWeight: 'bold'
                }}>
                  EPF
                </h3>
                <p style={{
                  margin: '0',
                  fontSize: '0.9rem',
                  opacity: '0.9'
                }}>
                  Escola Profissional
                </p>
              </div>
            </div>
            <p style={{
              lineHeight: '1.6',
              opacity: '0.9',
              marginBottom: '1.5rem'
            }}>
              Formação profissional de excelência com certificação 
              reconhecida nacionalmente. Educação que transforma vidas.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '1.5rem'
            }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{
                background: '#3b5998',
                color: 'white',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'transform 0.3s ease'
              }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                 onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <span style={{ fontSize: '1.1rem' }}>📘</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{
                background: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
                color: 'white',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'transform 0.3s ease'
              }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                 onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <span style={{ fontSize: '1.1rem' }}>📷</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{
                background: '#0077b5',
                color: 'white',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'transform 0.3s ease'
              }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                 onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <span style={{ fontSize: '1.1rem' }}>💼</span>
              </a>
            </div>
          </div>

          {/* COLUNA 2: LINKS RÁPIDOS */}
          <div>
            <h4 style={{
              color: '#f8b133',
              marginBottom: '1.5rem',
              fontSize: '1.2rem',
              fontWeight: '600',
              borderBottom: '2px solid rgba(248, 177, 51, 0.3)',
              paddingBottom: '0.5rem'
            }}>
              📋 Links Rápidos
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: '0',
              margin: '0'
            }}>
              <li style={{ marginBottom: '0.8rem' }}>
                <Link to="/" style={{
                  color: 'white',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  opacity: '0.9',
                  transition: 'all 0.3s ease'
                }} onMouseOver={(e) => { 
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.paddingLeft = '5px';
                }} onMouseOut={(e) => { 
                  e.currentTarget.style.opacity = '0.9';
                  e.currentTarget.style.paddingLeft = '0';
                }}>
                  <span>🏠</span> Início
                </Link>
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <Link to="/formacao" style={{
                  color: 'white',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  opacity: '0.9',
                  transition: 'all 0.3s ease'
                }} onMouseOver={(e) => { 
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.paddingLeft = '5px';
                }} onMouseOut={(e) => { 
                  e.currentTarget.style.opacity = '0.9';
                  e.currentTarget.style.paddingLeft = '0';
                }}>
                  <span>🎓</span> Formação
                </Link>
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <Link to="/escola" style={{
                  color: 'white',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  opacity: '0.9',
                  transition: 'all 0.3s ease'
                }} onMouseOver={(e) => { 
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.paddingLeft = '5px';
                }} onMouseOut={(e) => { 
                  e.currentTarget.style.opacity = '0.9';
                  e.currentTarget.style.paddingLeft = '0';
                }}>
                  <span>🏫</span> Escola
                </Link>
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <Link to="/erasmus" style={{
                  color: 'white',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  opacity: '0.9',
                  transition: 'all 0.3s ease'
                }} onMouseOver={(e) => { 
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.paddingLeft = '5px';
                }} onMouseOut={(e) => { 
                  e.currentTarget.style.opacity = '0.9';
                  e.currentTarget.style.paddingLeft = '0';
                }}>
                  <span>🌍</span> Erasmus+
                </Link>
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <Link to="/contactos" style={{
                  color: 'white',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  opacity: '0.9',
                  transition: 'all 0.3s ease'
                }} onMouseOver={(e) => { 
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.paddingLeft = '5px';
                }} onMouseOut={(e) => { 
                  e.currentTarget.style.opacity = '0.9';
                  e.currentTarget.style.paddingLeft = '0';
                }}>
                  <span>📞</span> Contactos
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUNA 3: CURSOS */}
          <div>
            <h4 style={{
              color: '#f8b133',
              marginBottom: '1.5rem',
              fontSize: '1.2rem',
              fontWeight: '600',
              borderBottom: '2px solid rgba(248, 177, 51, 0.3)',
              paddingBottom: '0.5rem'
            }}>
              📚 Nossos Cursos
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: '0',
              margin: '0'
            }}>
              <li style={{ marginBottom: '0.8rem' }}>
                <span style={{
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  opacity: '0.9'
                }}>
                  <span>⚙️</span> Manutenção Industrial
                </span>
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <span style={{
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  opacity: '0.9'
                }}>
                  <span>🚗</span> Mecatrónica Automóvel
                </span>
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <span style={{
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  opacity: '0.9'
                }}>
                  <span>🍳</span> Cozinha/Pastelaria
                </span>
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <span style={{
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  opacity: '0.9'
                }}>
                  <span>🏗️</span> Construção Civil
                </span>
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <span style={{
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  opacity: '0.9'
                }}>
                  <span>💻</span> Informática
                </span>
              </li>
            </ul>
          </div>

          {/* COLUNA 4: CONTACTOS */}
          <div>
            <h4 style={{
              color: '#f8b133',
              marginBottom: '1.5rem',
              fontSize: '1.2rem',
              fontWeight: '600',
              borderBottom: '2px solid rgba(248, 177, 51, 0.3)',
              paddingBottom: '0.5rem'
            }}>
              📞 Contactos
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: '0',
              margin: '0'
            }}>
              <li style={{ marginBottom: '1.2rem', display: 'flex', gap: '12px' }}>
                <div style={{
                  background: 'rgba(248, 177, 51, 0.1)',
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: '0'
                }}>
                  <span style={{ fontSize: '1.2rem', color: '#f8b133' }}>📍</span>
                </div>
                <div>
                  <div style={{ fontWeight: '600', color: '#f8b133' }}>Endereço</div>
                  <div style={{ opacity: '0.9' }}>Rua da Escola, 123</div>
                  <div style={{ opacity: '0.9' }}>Cidade, Portugal</div>
                </div>
              </li>
              <li style={{ marginBottom: '1.2rem', display: 'flex', gap: '12px' }}>
                <div style={{
                  background: 'rgba(248, 177, 51, 0.1)',
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: '0'
                }}>
                  <span style={{ fontSize: '1.2rem', color: '#f8b133' }}>📞</span>
                </div>
                <div>
                  <div style={{ fontWeight: '600', color: '#f8b133' }}>Telefone</div>
                  <div style={{ opacity: '0.9' }}>+351 123 456 789</div>
                </div>
              </li>
              <li style={{ marginBottom: '1.2rem', display: 'flex', gap: '12px' }}>
                <div style={{
                  background: 'rgba(248, 177, 51, 0.1)',
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: '0'
                }}>
                  <span style={{ fontSize: '1.2rem', color: '#f8b133' }}>✉️</span>
                </div>
                <div>
                  <div style={{ fontWeight: '600', color: '#f8b133' }}>Email</div>
                  <div style={{ opacity: '0.9' }}>geral@epf.pt</div>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '12px' }}>
                <div style={{
                  background: 'rgba(248, 177, 51, 0.1)',
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: '0'
                }}>
                  <span style={{ fontSize: '1.2rem', color: '#f8b133' }}>🕒</span>
                </div>
                <div>
                  <div style={{ fontWeight: '600', color: '#f8b133' }}>Horário</div>
                  <div style={{ opacity: '0.9' }}>Seg - Sex: 9h - 18h</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* LINHA DIVISÓRIA */}
        <div style={{
          height: '1px',
          background: 'rgba(255, 255, 255, 0.1)',
          margin: '2rem 0'
        }}></div>

        {/* RODAPÉ INFERIOR */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '1rem'
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1.5rem',
            marginBottom: '1rem'
          }}>
            <Link to="/privacidade" style={{
              color: 'white',
              textDecoration: 'none',
              opacity: '0.9',
              fontSize: '0.9rem',
              transition: 'opacity 0.3s ease'
            }} onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
               onMouseOut={(e) => e.currentTarget.style.opacity = '0.9'}>
              Política de Privacidade
            </Link>
            <Link to="/termos" style={{
              color: 'white',
              textDecoration: 'none',
              opacity: '0.9',
              fontSize: '0.9rem',
              transition: 'opacity 0.3s ease'
            }} onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
               onMouseOut={(e) => e.currentTarget.style.opacity = '0.9'}>
              Termos de Utilização
            </Link>
            <Link to="/cookies" style={{
              color: 'white',
              textDecoration: 'none',
              opacity: '0.9',
              fontSize: '0.9rem',
              transition: 'opacity 0.3s ease'
            }} onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
               onMouseOut={(e) => e.currentTarget.style.opacity = '0.9'}>
              Política de Cookies
            </Link>
            <Link to="/faq" style={{
              color: 'white',
              textDecoration: 'none',
              opacity: '0.9',
              fontSize: '0.9rem',
              transition: 'opacity 0.3s ease'
            }} onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
               onMouseOut={(e) => e.currentTarget.style.opacity = '0.9'}>
              FAQ
            </Link>
          </div>

          <div style={{
            opacity: '0.8',
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <span>© {currentYear} Escola Profissional - EPF</span>
            <span style={{ color: '#f8b133' }}>•</span>
            <span>Todos os direitos reservados</span>
            <span style={{ color: '#f8b133' }}>•</span>
            <span>Design by EPF Team</span>
          </div>

          <div style={{
            opacity: '0.7',
            fontSize: '0.85rem',
            marginTop: '0.5rem'
          }}>
            Certificado pela Direção-Geral de Educação | EQAVET Nível 4
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
