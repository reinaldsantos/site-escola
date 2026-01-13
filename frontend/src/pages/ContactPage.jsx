// src/pages/ContactPage.jsx - VERSÃO SIMPLES E LIMPA
import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-page-simple">
      {/* Cabeçalho Simples */}
      <div className="contact-header-simple">
        <h1>CONTACTOS</h1>
        <p>Escola Profissional do Fundão</p>
      </div>

      {/* Informações Principais */}
      <div className="contact-content-simple">
        
        {/* Endereço */}
        <div className="contact-section-simple">
          <h2>ENDEREÇO</h2>
          <div className="contact-details-simple">
            <p>R. Cidade de Salamanca 1</p>
            <p>6230-370 Fundão</p>
            <p>Portugal</p>
            <a 
              href="https://www.google.com/maps/@40.1350801,-7.5036338,3a,75y,198.33h,90.03t/data=!3m7!1e1!3m5!1s4n2J8QkhhkFi-8UzJFrHcA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-0.03335771249710717%26panoid%3D4n2J8QkhhkFi-8UzJFrHcA%26yaw%3D198.33127353033822!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="link-simple"
            >
              Ver localização no Google Maps
            </a>
          </div>
        </div>

        {/* Telefone */}
        <div className="contact-section-simple">
          <h2>TELEFONE</h2>
          <div className="contact-details-simple">
            <p className="phone-simple">275 779 050</p>
            <a href="tel:+351275779050" className="link-simple">
              Ligar agora
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="contact-section-simple">
          <h2>EMAIL</h2>
          <div className="contact-details-simple">
            <p className="email-simple">geral@epf.pt</p>
            <a href="mailto:geral@epf.pt" className="link-simple">
              Enviar email
            </a>
          </div>
        </div>

        {/* Horário */}
        <div className="contact-section-simple">
          <h2>HORÁRIO DE ATENDIMENTO</h2>
          <div className="contact-details-simple">
            <p>Secretaria</p>
            <p>Segunda a Sexta-feira</p>
            <p>09:00 - 18:00</p>
          </div>
        </div>

        {/* Linha Separadora */}
        <div className="separator-simple"></div>

        {/* Redes Sociais - Texto Simples */}
        <div className="social-section-simple">
          <h2>REDES SOCIAIS</h2>
          <div className="social-links-simple">
            <p>
              <a 
                href="https://www.facebook.com/EscolaProfissionalFundao"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-simple"
              >
                Facebook
              </a>
            </p>
            <p>
              <a 
                href="https://www.instagram.com/escolaprofissionalfundao/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-simple"
              >
                Instagram
              </a>
            </p>
          </div>
          <p className="social-note-simple">
            Siga-nos para acompanhar as últimas novidades.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
