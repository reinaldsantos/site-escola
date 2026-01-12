import React from 'react';
import './NewsSection.css';

const NewsSection = () => {
  const news = [
    {
      title: 'Atividades de 22 e 23 de abril',
      content: 'Por motivos relacionados com a tecnologia de mobiliário do banco, atividades feitas nos dias 22 e 23 de abril. Agradecemos a vasta compreensão.'
    },
    {
      title: 'Atividades Culturais e Desportivas',
      content: 'Programação de atividades culturais e desportivas para o corrente ano letivo.'
    },
    {
      title: 'Jantar de Natal EPF 2023',
      content: 'Realização do tradicional jantar de Natal da Escola Profissional do Fundão.'
    }
  ];

  return (
    <div className='news-section'>
      <h2>Últimas Notícias</h2>
      <div className='news-grid'>
        {news.map((item, index) => (
          <div key={index} className='news-card'>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
