import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Instituição</h3>
            <ul>
              <li><Link to="/sobre">Escola</Link></li>
              <li><Link to="/sobre">Organização</Link></li>
              <li><Link to="/sobre">Projeto Educativo</Link></li>
              <li><Link to="/contactos">Contactos</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Oferta Formativa</h3>
            <ul>
              <li><Link to="/cursos">Cursos Profissionais</Link></li>
              <li><Link to="/cursos">Cursos CEF</Link></li>
              <li><Link to="/cursos">Outras Ofertas</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>somosEPF</h3>
            <p>
              Com uma experiência de trinta anos de formação e com elevados índices 
              de empregabilidade, a Escola Profissional do Fundão promove o jovem, 
              incrementa competência e gera valor.
            </p>
          </div>

          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Inscreva-se no nosso boletim informativo</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Seu email" />
              <button className="btn btn-primary">Subscrever</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Associação Promotora de Ensino Profissional da Cova da Beira</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
