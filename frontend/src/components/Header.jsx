import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logoEPF from '../assets/images/logos/logo_w.png';

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  const escolaSubmenu = [
    { path: "/escola/sobre-nos", label: "Sobre Nós" },
    { path: "/escola/autorizacao", label: "Autorização de Funcionamento" },
    { path: "/escola/estatutos", label: "Estatutos" },
    { path: "/escola/regulamento", label: "Regulamento Interno" },
    { path: "/escola/projeto-educativo", label: "Projeto Educativo" },
    { path: "/escola/privacidade", label: "Política de Privacidade" },
    { path: "/escola/organizacao", label: "Organização Escolar" },
    { path: "/escola/educacao-inclusiva", label: "Guião Educação Inclusiva" },
    { path: "/escola/legislacao", label: "Legislação de apoio" },
    { path: "/escola/fichas-operacao", label: "Fichas de Operação" }
  ];

  const eqavetSubmenu = [
    { path: "/eqavet/selo", label: "Selo de Conformidade EQAVET" },
    { path: "/eqavet/documento-base", label: "Documento Base" },
    { path: "/eqavet/plano-acao", label: "Plano de Ação" },
    { path: "/eqavet/relatorio-operador", label: "Relatório do Operador" },
    { path: "/eqavet/plano-integrado", label: "Plano de Ação Integrado" },
    { path: "/eqavet/relatorio-verificacao", label: "Relatório de Verificação EQAVET" },
    { path: "/eqavet/manual", label: "Manual de processos, procedimentos e gestão documental" },
    { path: "/eqavet/acompanhamento", label: "Relatórios de Acompanhamento" },
    { path: "/eqavet/progresso-anual", label: "Relatórios de Progresso Anual" },
    { path: "/eqavet/certificacao", label: "Certificação EQAVET 2020-2023" }
  ];

  const handleMenuClick = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="epf-header">
      <div className="header-top">
        <div className="logo-container">
          <Link to="/" onClick={handleMenuClick}>
            <img src={logoEPF} alt="Escola Profissional do Fundão" className="epf-logo" />
          </Link>
        </div>

        <div className="header-actions">
          <button className="btn-inscricao">INSCREVE-TE 25/26</button>
          <div className="language-selector">
            <span className="active">PT</span> | <span>EN</span>
          </div>
          
          {/* Botão hambúrguer para mobile */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <span className={mobileMenuOpen ? "open" : ""}></span>
            <span className={mobileMenuOpen ? "open" : ""}></span>
            <span className={mobileMenuOpen ? "open" : ""}></span>
          </button>
        </div>
      </div>

      <nav className={`epf-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <ul className="nav-menu">
          <li>
            <Link to="/" onClick={handleMenuClick}>Início</Link>
          </li>
          
          {/* Menu A Escola com submenu completo */}
          <li className={`dropdown ${activeDropdown === 'escola' ? 'active' : ''}`}>
            <button 
              className="dropdown-trigger"
              onClick={() => toggleDropdown('escola')}
              aria-expanded={activeDropdown === 'escola'}
            >
              A Escola <span className="arrow">▼</span>
            </button>
            <ul className="dropdown-menu">
              {escolaSubmenu.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} onClick={handleMenuClick}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className={`dropdown ${activeDropdown === 'formacao' ? 'active' : ''}`}>
            <button 
              className="dropdown-trigger"
              onClick={() => toggleDropdown('formacao')}
              aria-expanded={activeDropdown === 'formacao'}
            >
              Formação <span className="arrow">▼</span>
            </button>
            <ul className="dropdown-menu">
              <li><Link to="/formacao/cursos" onClick={handleMenuClick}>Cursos</Link></li>
              <li><Link to="/formacao/horarios" onClick={handleMenuClick}>Horários</Link></li>
              <li><Link to="/formacao/calendario" onClick={handleMenuClick}>Calendário Escolar</Link></li>
            </ul>
          </li>
          
          <li>
            <Link to="/noticias" onClick={handleMenuClick}>Notícias</Link>
          </li>
          
          <li className={`dropdown ${activeDropdown === 'alumni' ? 'active' : ''}`}>
            <button 
              className="dropdown-trigger"
              onClick={() => toggleDropdown('alumni')}
              aria-expanded={activeDropdown === 'alumni'}
            >
              Alumni e Parceiros <span className="arrow">▼</span>
            </button>
            <ul className="dropdown-menu">
              <li><Link to="/alumni/ex-alunos" onClick={handleMenuClick}>Ex-Alunos</Link></li>
              <li><Link to="/alumni/parceiros" onClick={handleMenuClick}>Parceiros</Link></li>
            </ul>
          </li>
          
          <li>
            <Link to="/erasmus" onClick={handleMenuClick}>Erasmus+</Link>
          </li>
          
          {/* Menu EQAVET com submenu completo */}
          <li className={`dropdown ${activeDropdown === 'eqavet' ? 'active' : ''}`}>
            <button 
              className="dropdown-trigger"
              onClick={() => toggleDropdown('eqavet')}
              aria-expanded={activeDropdown === 'eqavet'}
            >
              EQAVET <span className="arrow">▼</span>
            </button>
            <ul className="dropdown-menu">
              {eqavetSubmenu.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} onClick={handleMenuClick}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          
          <li>
            <Link to="/contactos" onClick={handleMenuClick}>Contactos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;