import './About.css';

const About = () => {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>A Escola</h1>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-section">
            <h2>Sobre NÃ³s</h2>
            <p>
              Com uma experiÃªncia de trinta anos de formaÃ§Ã£o e com elevados Ã­ndices 
              de empregabilidade, a Escola Profissional do FundÃ£o promove o jovem, 
              incrementa competÃªncia e gera valor.
            </p>
            <p>
              Somos uma instituiÃ§Ã£o dedicada Ã  formaÃ§Ã£o profissional de qualidade, 
              oferecendo cursos que preparam os nossos alunos para o mercado de trabalho 
              com competÃªncias prÃ¡ticas e teÃ³ricas.
            </p>
          </div>

          <div className="about-section">
            <h2>MissÃ£o</h2>
            <p>
              Formar jovens profissionais competentes, preparados para os desafios 
              do mercado de trabalho, promovendo a excelÃªncia educativa e o desenvolvimento 
              pessoal e profissional.
            </p>
          </div>

          <div className="about-section">
            <h2>Valores</h2>
            <ul>
              <li>ExcelÃªncia na formaÃ§Ã£o</li>
              <li>InovaÃ§Ã£o pedagÃ³gica</li>
              <li>Compromisso com o sucesso dos alunos</li>
              <li>Parcerias estratÃ©gicas com empresas</li>
              <li>Responsabilidade social</li>
            </ul>
          </div>

          <div className="about-section">
            <h2>OrganizaÃ§Ã£o Escolar</h2>
            <p>
              A nossa organizaÃ§Ã£o estÃ¡ estruturada para proporcionar uma formaÃ§Ã£o 
              completa e de qualidade, com equipas especializadas e instalaÃ§Ãµes modernas.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
