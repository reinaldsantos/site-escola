import './Contacts.css';

const Contacts = () => {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Contactos</h1>
        </div>
      </section>

      <section className="contacts-content">
        <div className="container">
          <div className="contacts-grid">
            <div className="contact-card">
              <h2>Morada</h2>
              <p>
                Escola Profissional do Fundão<br />
                6230-426 Fundão<br />
                Portugal
              </p>
            </div>

            <div className="contact-card">
              <h2>Telefone</h2>
              <p>
                +351 XXX XXX XXX
              </p>
            </div>

            <div className="contact-card">
              <h2>Email</h2>
              <p>
                geral@epfundao.pt
              </p>
            </div>

            <div className="contact-card">
              <h2>Horário</h2>
              <p>
                Segunda a Sexta<br />
                09:00 - 18:00
              </p>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>Envie-nos uma mensagem</h2>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Assunto</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contacts;
