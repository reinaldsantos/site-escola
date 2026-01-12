import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logoEPF from '../assets/images/logos/logo_w.png';

function Header() {
  return (
    <header className="epf-header">
      <div className="header-top">
        <div className="logo-container">
          <img src={logoEPF} alt="Escola Profissional do Fundão" className="epf-logo" />
        </div>

        <div className="header-actions">
          {/* BOTÃO INSCREVE-TE EM VERDE #18cc2a */}
          <button className="btn-inscricao">INSCREVE-TE 25/26</button>
          <div className="language-selector">
            <span>PT</span> | <span>EN</span>
          </div>
        </div>
      </div>

      <nav className="epf-nav">
        <ul className="nav-menu">
          <li><Link to="/">Início</Link></li>
          <li className="dropdown">
            <Link to="/escola">A Escola ▼</Link>
            <ul className="dropdown-menu">
              <li><Link to="/escola/historia">História</Link></li>
              <li><Link to="/escola/missao">Missão e Valores</Link></li>
              <li><Link to="/escola/equipa">Equipa</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <Link to="/formacao">Formação ▼</Link>
            <ul className="dropdown-menu">
              <li><Link to="/formacao/cursos">Cursos</Link></li>
              <li><Link to="/formacao/horarios">Horários</Link></li>
              <li><Link to="/formacao/calendario">Calendário Escolar</Link></li>
            </ul>
          </li>
          <li><Link to="/noticias">Notícias</Link></li>
          <li className="dropdown">
            <Link to="/alumni">Alumni e Parceiros ▼</Link>
            <ul className="dropdown-menu">
              <li><Link to="/alumni/ex-alunos">Ex-Alunos</Link></li>
              <li><Link to="/alumni/parceiros">Parceiros</Link></li>
            </ul>
          </li>
          <li><Link to="/erasmus">Erasmus+</Link></li>
          <li className="dropdown">
            <Link to="/eqvei">EQ/VEI ▼</Link>
            <ul className="dropdown-menu">
              <li><Link to="/eqvei/qualidade">Qualidade</Link></li>
              <li><Link to="/eqvei/vei">VEI</Link></li>
            </ul>
          </li>
          <li><Link to="/contactos">Contactos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
