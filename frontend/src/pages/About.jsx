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
            <h2>Sobre Nós</h2>
            <p>
              Com uma experiência de trinta anos de formação e com elevados índices 
              de empregabilidade, a Escola Profissional do Fundão promove o jovem, 
              incrementa competência e gera valor.
            </p>
            <p>
              Somos uma instituição dedicada à formação profissional de qualidade, 
              oferecendo cursos que preparam os nossos alunos para o mercado de trabalho 
              com competências práticas e teóricas.
            </p>
          </div>

          <div className="about-section">
            <h2>Missão</h2>
            <p>
              Formar jovens profissionais competentes, preparados para os desafios 
              do mercado de trabalho, promovendo a excelência educativa e o desenvolvimento 
              pessoal e profissional.
            </p>
          </div>

          <div className="about-section">
            <h2>Valores</h2>
            <ul>
              <li>Excelência na formação</li>
              <li>Inovação pedagógica</li>
              <li>Compromisso com o sucesso dos alunos</li>
              <li>Parcerias estratégicas com empresas</li>
              <li>Responsabilidade social</li>
            </ul>
          </div>

          <div className="about-section">
            <h2>Organização Escolar</h2>
            <p>
              A nossa organização está estruturada para proporcionar uma formação 
              completa e de qualidade, com equipas especializadas e instalações modernas.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
