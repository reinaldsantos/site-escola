// src/hooks/useStrapiUniversal.js
import { useState, useEffect } from 'react';

const useStrapiUniversal = (collectionName, limit = 10) => {
  const [dados, setDados] = useState([]);
  const [campos, setCampos] = useState({});
  const [carregando, setCarregando] = useState(true);

  // Mapeamento FIXO de campos por coleção (CORRIGIDO!)
  const mapeamentoCampos = {
    'noticias': {
      titulo: 'titulo',
      conteudo: 'conteudo',
      data: 'data_publicacao',
      imagem: 'imagem'
    },
    'eventos': {
      titulo: 'titulo',
      conteudo: 'descricao',
      data: 'data_evento',
      imagem: 'imagem',
      local: 'local',
      horario: 'horario'
    },
    'cursos': {
      titulo: 'titulo',
      conteudo: 'descricao',
      data: 'createdAt',
      imagem: 'imagem'
    },
    'avisos': {
      titulo: 'titulo',
      conteudo: 'conteudo',
      data: 'createdAt',
      imagem: 'imagem'
    }
  };

  // Fallback para coleções não mapeadas
  const detectarCamposFallback = (item) => {
    const keys = Object.keys(item);
    return {
      titulo: keys.find(k => k.includes('titulo') || k.includes('title') || k.includes('nome')) || 'titulo',
      conteudo: keys.find(k => k.includes('conteudo') || k.includes('content') || k.includes('descricao') || k.includes('descricao')) || 'conteudo',
      data: keys.find(k => k.includes('data') || k.includes('date') || k.includes('created')) || 'createdAt',
      imagem: keys.find(k => k.includes('imagem') || k.includes('image') || k.includes('foto') || k.includes('cover')) || 'imagem',
      local: keys.find(k => k.includes('local') || k.includes('location') || k.includes('localizacao')) || null,
      horario: keys.find(k => k.includes('horario') || k.includes('time') || k.includes('hora')) || null
    };
  };

  const buscarDados = async () => {
    try {
      setCarregando(true);
      
      // URL correta para Strapi v4
      const apiUrl = `https://site-escola-65zi.onrender.com/api/${collectionName}?populate=*&sort=createdAt:desc&pagination[pageSize]=${limit}`;
      
      console.log(`🔍 Buscando: ${apiUrl}`); // Debug
      
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log(`📦 Dados recebidos de ${collectionName}:`, data); // Debug
      
      // Strapi v4 retorna data.data
      const items = data.data || [];
      
      if (items.length > 0) {
        // Usar mapeamento fixo ou fallback
        let camposDetectados = mapeamentoCampos[collectionName];
        
        if (!camposDetectados) {
          camposDetectados = detectarCamposFallback(items[0].attributes || items[0]);
        }
        
        // Extrair atributos (Strapi v4)
        const dadosFormatados = items.map(item => {
          const attributes = item.attributes || item;
          return {
            id: item.id,
            ...attributes
          };
        });
        
        console.log(`✅ Campos detectados para ${collectionName}:`, camposDetectados); // Debug
        console.log(`📊 Primeiro item:`, dadosFormatados[0]); // Debug
        
        setDados(dadosFormatados);
        setCampos(camposDetectados);
      } else {
        setDados([]);
        setCampos({});
      }
      
    } catch (erro) {
      console.error(`❌ Erro ao buscar ${collectionName}:`, erro);
      setDados([]);
      setCampos({});
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    buscarDados();
  }, [collectionName, limit]);

  return { dados, campos, carregando };
};

export default useStrapiUniversal;


