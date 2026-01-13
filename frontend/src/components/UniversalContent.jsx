// src/components/UniversalContent.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import useStrapiData from '../hooks/useStrapiData';

const UniversalContent = ({ 
  collectionName,
  limit = 3,
  title = null,
  showViewAll = true
}) => {
  const { dados: items, carregando } = useStrapiData(collectionName, limit);
  
  if (carregando) {
    return <div className="loading">Carregando {collectionName}...</div>;
  }
  
  if (items.length === 0) {
    return null;
  }
  
  const displayTitle = title || 
    collectionName.charAt(0).toUpperCase() + collectionName.slice(1);
  
  return (
    <div className="universal-content">
      <h2 className="section-title">
        {displayTitle} <span className="badge">{items.length}</span>
      </h2>
      
      <div className="content-grid">
        {items.map(item => (
          <div key={item.id} className="content-card">
            <h3>{item.titulo || item.nome || item.title || 'Item'}</h3>
            
            {item.descricao && (
              <p className="description">
                {extractText(item.descricao, 100)}
              </p>
            )}
            
            {(item.data || item.createdAt) && (
              <span className="date">
                📅 {formatDate(item.data || item.createdAt)}
              </span>
            )}
            
            <Link to={`/${collectionName}/${item.id}`} className="view-link">
              Ver detalhes →
            </Link>
          </div>
        ))}
      </div>
      
      {showViewAll && items.length > 0 && (
        <div className="view-all">
          <Link to={`/${collectionName}`} className="btn-view-all">
            📄 Ver todos os {collectionName}
          </Link>
        </div>
      )}
    </div>
  );
};

// Funções auxiliares
const extractText = (content, maxLength) => {
  if (typeof content === 'string') {
    return content.length > maxLength 
      ? content.substring(0, maxLength) + '...' 
      : content;
  }
  
  if (Array.isArray(content)) {
    let text = '';
    for (const block of content) {
      if (block.type === 'paragraph' && block.children) {
        for (const child of block.children) {
          if (child.type === 'text' && child.text) {
            text += child.text + ' ';
          }
        }
      }
    }
    return text.length > maxLength 
      ? text.substring(0, maxLength) + '...' 
      : text;
  }
  
  return 'Conteúdo disponível...';
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-PT', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
};

export default UniversalContent;
