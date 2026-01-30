import React, { useState, useEffect } from 'react'; // ← Adicione useEffect
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar se é mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleDropdown = (dropdownName) => {
    if (isMobile) {
      // No mobile, fecha o dropdown se já estiver aberto
      setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    } else {
      // No desktop, comportamento normal
      setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    }
  };

  const escolaSubmenu = [
    { path: "/escola", label: "Sobre Nós" },
    { path: "/escola/autorizacao-funcionamento", label: "Autorização de Funcionamento" },
    { path: "/escola/estatutos", label: "Estatutos" },
    { path: "/escola/regulamento-interno", label: "Regulamento Interno" },
    { path: "/escola/projeto-educativo", label: "Projeto Educativo" },
    { path: "/escola/politica-privacidade", label: "Política de Privacidade" },
    { path: "/escola/organizacao-escolar", label: "Organização Escolar" },
    { path: "/escola/educacao-inclusiva", label: "Guião Educação Inclusiva" },
    { path: "/escola/legislacao-apoio", label: "Legislação de apoio" },
    { path: "/escola/fichas-operacao", label: "Fichas de Operação" }
  ];

  const eqavetSubmenu = [
    { path: "/eqavet/selo-conformidade", label: "Selo de Conformidade EQAVET" },
    { path: "/eqavet/documento-base", label: "Documento Base" },
    { path: "/eqavet/plano-acao", label: "Plano de Ação" },
    { path: "/eqavet/relatorio-operador", label: "Relatório do Operador" },
    { path: "/eqavet/plano-acao-integrado", label: "Plano de Ação Integrado" },
    { path: "/eqavet/relatorio-verificacao", label: "Relatório de Verificação EQAVET" },
    { path: "/eqavet/manual-processos", label: "Manual de processos, procedimentos e gestão documental" },
    { path: "/eqavet/relatorios-acompanhamento", label: "Relatórios de Acompanhamento" },
    { path: "/eqavet/relatorios-progresso-anual", label: "Relatórios de Progresso Anual" },
    { path: "/eqavet/certificacao-2023", label: "Certificação EQAVET 2020-2023" }
  ];

  // Fecha menu mobile ao clicar em um link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="navbar-com-logo">
      <div className="nav-container">
        {/* LOGO */}
        <Link to="/" className="nav-logo" onClick={handleLinkClick}>
          <img 
            src="/logo_w.png" 
            alt="EPF - Escola Profissional do Fundão"
            className="logo-real"
          />
        </Link>
        
        {/* Botão hambúrguer mobile - SEMPRE VISÍVEL NO MOBILE */}
        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className={mobileMenuOpen ? "open" : ""}></span>
          <span className={mobileMenuOpen ? "open" : ""}></span>
          <span className={mobileMenuOpen ? "open" : ""}></span>
        </button>

        {/* Links com dropdowns */}
        <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className="nav-link" onClick={handleLinkClick}>INÍCIO</Link>
          
          {/* ESCOLA com dropdown */}
          <div className={`nav-dropdown ${activeDropdown === 'escola' ? 'active' : ''}`}>
            <button 
              className="nav-link nav-dropdown-btn"
              onClick={() => toggleDropdown('escola')}
              aria-expanded={activeDropdown === 'escola'}
            >
              ESCOLA <span className="arrow">▼</span>
            </button>
            
            {/* Dropdown menu - CONDICIONAL para mobile/desktop */}
            {(isMobile && activeDropdown === 'escola') || (!isMobile && activeDropdown === 'escola') ? (
              <div className="dropdown-menu">
                {escolaSubmenu.map((item, index) => (
                  <Link 
                    key={index} 
                    to={item.path} 
                    className="dropdown-item"
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <Link to="/formacao" className="nav-link" onClick={handleLinkClick}>CURSOS</Link>
          <Link to="/noticias" className="nav-link" onClick={handleLinkClick}>NOTÍCIAS</Link>
          <Link to="/alumni" className="nav-link" onClick={handleLinkClick}>ALUMNI</Link>
          <Link to="/erasmus" className="nav-link" onClick={handleLinkClick}>ERASMUS+</Link>
          
          {/* EQAVET com dropdown */}
          <div className={`nav-dropdown ${activeDropdown === 'eqavet' ? 'active' : ''}`}>
            <button 
              className="nav-link nav-dropdown-btn"
              onClick={() => toggleDropdown('eqavet')}
              aria-expanded={activeDropdown === 'eqavet'}
            >
              EQAVET <span className="arrow">▼</span>
            </button>
            
            {(isMobile && activeDropdown === 'eqavet') || (!isMobile && activeDropdown === 'eqavet') ? (
              <div className="dropdown-menu">
                {eqavetSubmenu.map((item, index) => (
                  <Link 
                    key={index} 
                    to={item.path} 
                    className="dropdown-item"
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <Link to="/contactos" className="nav-link" onClick={handleLinkClick}>CONTACTOS</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;