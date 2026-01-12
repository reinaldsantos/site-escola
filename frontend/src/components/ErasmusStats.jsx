import React from 'react';
import './ErasmusStats.css';

const ErasmusStats = () => {
  const stats = [
    { number: '681', label: 'Mobilidades' },
    { number: '15.131', label: 'Dias de Estágio' },
    { number: '172.172', label: 'Kms Percorridos' },
    { number: '281', label: 'Parceiros' },
    { number: '19', label: 'Países de Destino' },
    { number: '99%', label: 'Avaliação' }
  ];

  return (
    <div className='erasmus-stats'>
      <h2>Estatísticas Erasmus+</h2>
      <div className='stats-grid'>
        {stats.map((stat, index) => (
          <div key={index} className='stat-box'>
            <div className='stat-number'>{stat.number}</div>
            <div className='stat-label'>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ErasmusStats;
