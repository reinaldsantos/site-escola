import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-com-logo">
      <div className="nav-container">
        {/* LOGO REAL */}
        <Link to="/" className="nav-logo">
          <img 
            src="/logo_w.png" 
            alt="EPF - Escola Profissional do Fundão"
            className="logo-real"
          />
        </Link>
        
        {/* Links */}
        <div className="nav-links">
          <Link to="/" className="nav-link">INÍCIO</Link>
          <Link to="/escola" className="nav-link">ESCOLA</Link>
          <Link to="/formacao" className="nav-link">CURSOS</Link>
          <Link to="/noticias" className="nav-link">NOTÍCIAS</Link>
          <Link to="/alumni" className="nav-link">ALUMNI</Link>
          <Link to="/erasmus" className="nav-link">ERASMUS+</Link>
          <Link to="/contactos" className="nav-link">CONTACTOS</Link>
        </div>
        
        {/* Botão */}
        <Link to="/inscricao" className="nav-btn-inscricao">
          INSCREVE-TE
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
