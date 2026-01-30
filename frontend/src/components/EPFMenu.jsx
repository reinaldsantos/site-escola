import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './EPFMenuAlternative.css';

const EPFMenuAlternative = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleSubmenu = (menuName) => {
    setActiveSubmenu(activeSubmenu === menuName ? null : menuName);
  };

  const menuItems = [
    {
      id: 'home',
      label: 'Início',
      path: '/',
      type: 'link'
    },
    {
      id: 'escola',
      label: 'A Escola',
      type: 'submenu',
      icon: '▼',
      items: [
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
      ]
    },
    {
      id: 'formacao',
      label: 'Formação',
      path: '/formacao',
      type: 'link'
    },
    {
      id: 'noticias',
      label: 'Notícias',
      path: '/noticias',
      type: 'link'
    },
    {
      id: 'alumni',
      label: 'Alumni e Parceiros',
      path: '/alumni',
      type: 'link'
    },
    {
      id: 'erasmus',
      label: 'Erasmus+',
      path: '/erasmus',
      type: 'link'
    },
    {
      id: 'eqavet',
      label: 'EQAVET',
      type: 'submenu',
      icon: '▼',
      items: [
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
      ]
    },
    {
      id: 'contactos',
      label: 'Contactos',
      path: '/contactos',
      type: 'link'
    }
  ];

  const handleMenuItemClick = () => {
    setMenuOpen(false);
    setActiveSubmenu(null);
  };

  return (
    <nav className="epf-alt-menu">
      <div className="epf-alt-container">
        {/* Logo */}
        <div className="epf-alt-logo">
          <Link to="/" onClick={handleMenuItemClick}>
            <span className="logo-text">EPF</span>
            <span className="logo-full">Escola Profissional do Fundão</span>
          </Link>
        </div>

        {/* Hamburger Button */}
        <button 
          className={`epf-alt-hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu Links */}
        <div className={`epf-alt-nav ${menuOpen ? 'active' : ''}`}>
          {menuItems.map((item) => (
            <div key={item.id} className="epf-alt-nav-item">
              {item.type === 'link' ? (
                <Link 
                  to={item.path} 
                  className="epf-alt-link"
                  onClick={handleMenuItemClick}
                >
                  {item.label}
                </Link>
              ) : (
                <div className="epf-alt-submenu-wrapper">
                  <button
                    className={`epf-alt-submenu-toggle ${activeSubmenu === item.id ? 'active' : ''}`}
                    onClick={() => toggleSubmenu(item.id)}
                  >
                    {item.label}
                    <span className="epf-alt-arrow">{item.icon}</span>
                  </button>
                  
                  {activeSubmenu === item.id && (
                    <div className="epf-alt-submenu">
                      {item.items.map((subItem, index) => (
                        <Link
                          key={index}
                          to={subItem.path}
                          className="epf-alt-submenu-link"
                          onClick={handleMenuItemClick}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default EPFMenuAlternative;