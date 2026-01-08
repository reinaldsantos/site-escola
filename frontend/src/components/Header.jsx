import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Início' },
    { path: '/sobre', label: 'A Escola' },
    { path: '/cursos', label: 'Formação' },
    { path: '/noticias', label: 'Notícias' },
    { path: '/contactos', label: 'Contactos' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
            <h1>EPF Fundão</h1>
            <p>Escola Profissional do Fundão</p>
          </Link>
          
          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
            {menuItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/admin/login"
              className="nav-link admin-link"
              onClick={() => setMenuOpen(false)}
            >
              Admin
            </Link>
          </nav>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
