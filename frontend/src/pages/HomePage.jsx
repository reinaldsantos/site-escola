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

        {/* NOTÍCIAS - Botão "Ver notícias" dentro da imagem */}
        <ContentUniversal
          collectionName="noticias"
          title="📰 ÚLTIMAS NOTÍCIAS"
          limit={3}
          showDate={true}
          showDescription={true}
          customDetailPage="noticias"      // Vai para /noticias (listagem)
          customViewAllPage="noticias"     // "Ver todos" vai para /noticias
        />

        {/* EVENTOS - Botão "Ver eventos" dentro da imagem */}
        <ContentUniversal
          collectionName="eventos"
          title="📅 PRÓXIMOS EVENTOS"
          limit={3}
          showDate={true}
          showDescription={true}
          customDetailPage="noticias"      // Vai para /noticias (listagem)
          customViewAllPage="noticias"     // "Ver todos" vai para /noticias
        />

        {/* CURSOS - Botão "Ver detalhes" dentro da imagem */}
        <ContentUniversal 
          collectionName="cursos"
          title="🎓 NOSSOS CURSOS"
          limit={3}
          showDate={false}                 // Cursos normalmente não têm data
          showDescription={true}
          customDetailPage="cursos"        // Vai para /cursos/[id] (detalhe)
          customViewAllPage="formacao"     // "Ver todos" vai para /formacao
        />

        {/* AVISOS - Botão "Ver avisos" dentro da imagem */}
        <ContentUniversal
          collectionName="avisos"
          title="📢 AVISOS IMPORTANTES"
          limit={3}
          showDate={true}
          showDescription={true}
          customDetailPage="noticias"      // Vai para /noticias (listagem)
          customViewAllPage="noticias"     // "Ver todos" vai para /noticias
        />

      </div>
    </div>
  );
};

export default HomePage;
