// src/components/Carousel.jsx
import { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // IMAGENS QUE VOCÊ JÁ TEM NA PASTA public/carousel/
  const slides = [
    {
      id: 1,
      image: "/carousel/epf1.jpg", // ← Imagem 1 que você colocou
      title: "ESCOLA PROFISSIONAL DO FUNDÃO",
      description: "Excelência na formação profissional desde 1990",
      link: "/escola"
    },
    {
      id: 2,
      image: "/carousel/epf2.jpg", // ← Imagem 2 que você colocou
      title: "FORMAÇÃO TÉCNICA ESPECIALIZADA",
      description: "Cursos profissionais com saídas para o mercado de trabalho",
      link: "/cursos"
    },
    {
      id: 3,
      image: "/carousel/epf3.jpg", // ← Imagem 3 que você colocou
      title: "ERASMUS+ E MOBILIDADE",
      description: "Experiências internacionais para alunos e professores",
      link: "/erasmus"
    },
    {
      id: 4,
      image: "/carousel/epf4.jpg", // ← Imagem 4 que você colocou
      title: "ALUMNI E SUCESSO PROFISSIONAL",
      description: "Histórias de sucesso dos nossos ex-alunos",
      link: "/alumni"
    },
    {
      id: 5,
      image: "/carousel/epf5.jpg", // ← Imagem 5 que você colocou
      title: "INSTALAÇÕES MODERNAS",
      description: "Infraestruturas de qualidade para melhor aprendizagem",
      link: "/escola"
    }
  ];

  // Auto-play: muda slide a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="carousel-hero">
      {/* Slides */}
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-overlay">
              <div className="slide-content">
                <h1 className="slide-title">{slide.title}</h1>
                <p className="slide-description">{slide.description}</p>
                <a href={slide.link} className="slide-btn">
                  SABER MAIS
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botões de navegação */}
      <button className="carousel-nav prev" onClick={prevSlide} aria-label="Slide anterior">
        <span>&#10094;</span>
      </button>
      <button className="carousel-nav next" onClick={nextSlide} aria-label="Próximo slide">
        <span>&#10095;</span>
      </button>

      {/* Indicadores (pontos) */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;