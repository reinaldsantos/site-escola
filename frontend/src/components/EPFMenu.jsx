import React from 'react';
import { Link } from 'react-router-dom';
import './EPFMenu.css';

const EPFMenu = () => {
  return (
    <nav className="epf-menu">
      <div className="epf-menu-container">
        <div className="epf-logo">
          <Link to="/">Escola Profissional do Fundão</Link>
        </div>

        <ul className="epf-nav-links">
          <li><Link to="/">Início</Link></li>
          <li><Link to="/escola">A Escola</Link></li>
          <li><Link to="/formacao">Formação</Link></li>
          <li><Link to="/noticias">Notícias</Link></li>
          <li><Link to="/alumni">Alumni e Parceiros</Link></li>
          <li><Link to="/erasmus">Erasmus+</Link></li>
          <li><Link to="/eqavet">EQAVET</Link></li>
          <li><Link to="/contactos">Contactos</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default EPFMenu;
