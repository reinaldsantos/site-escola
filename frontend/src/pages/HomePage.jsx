import React from "react";
import "./HomePage.css";
import ContentUniversal from "../components/ContentUniversal";

const HomePage = () => {
  return (
    <div className="home-funcional">
      {/* Hero Section */}
      <div className="hero-fundo">
        <div className="hero-conteudo">
          <h1>ESCOLA PROFISSIONAL DO FUNDÃO</h1>
          <p className="slogan">#PROXIMIDADE  #QUALIDADE  #LomodEFF</p>
        </div>
      </div>

      {/* Seções principais com SISTEMA UNIVERSAL */}
      <div className="secoes-container">

        {/* NOTÍCIAS - SEM BOTÃO dentro do card */}
        <ContentUniversal
          collectionName="noticias"
          title="ÚLTIMAS NOTÍCIAS"
          limit={3}
          showDate={true}
          showDescription={true}
          customDetailPage={null}          // SEM BOTÃO (null)
          customViewAllPage="noticias"     // "Ver todos" vai para /noticias
        />

        {/* EVENTOS - Botão "VER EVENTOS" dentro da imagem */}
        <ContentUniversal
          collectionName="eventos"
          title="PRÓXIMOS EVENTOS"
          limit={3}
          showDate={true}
          showDescription={true}
          customDetailPage="noticias"      // Botão vai para /noticias
          customViewAllPage="noticias"     // "Ver todos" vai para /noticias
        />

        {/* CURSOS - Botão "VER CURSOS" dentro da imagem */}
        <ContentUniversal 
          collectionName="cursos"
          title="NOSSOS CURSOS"
          limit={3}
          showDate={false}                 // Cursos normalmente não têm data
          showDescription={true}
          customDetailPage="formacao"      // Botão vai para /formacao
          customViewAllPage="formacao"     // "Ver todos" vai para /formacao
        />

        {/* AVISOS - SEM BOTÃO dentro do card */}
        <ContentUniversal
          collectionName="avisos"
          title="AVISOS IMPORTANTES"
          limit={3}
          showDate={true}
          showDescription={true}
          customDetailPage={null}          // SEM BOTÃO (null)
          customViewAllPage="noticias"     // "Ver todos" vai para /noticias
        />

      </div>
    </div>
  );
};

export default HomePage;
