// src/hooks/useStrapiData.js
import { useState, useEffect } from 'react';

const useStrapiData = (collectionName, limit = 10) => {
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setCarregando(true);
        setErro(null);
        
        // CORREÇÃO: Nova URL base e endpoints no plural
        const baseUrl = 'https://strapi-definitivo.onrender.com';
        
        // Mapear nomes das coleções para garantir que estão no plural
        const collectionsPlural = {
          'noticia': 'noticias',
          'evento': 'eventos',
          'aviso': 'avisos',
          'curso': 'cursos',
          // Adicione outras coleções conforme necessário
        };
        
        // Usar o nome no plural, se não fornecermos no plural diretamente
        const collectionPlural = collectionsPlural[collectionName] || collectionName;
        
        const url = `${baseUrl}/api/${collectionPlural}?populate=*&sort=createdAt:DESC${limit ? `&pagination[pageSize]=${limit}` : ''}`;
        
        console.log(`🔄 Buscando: ${url}`);
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`Erro ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        
        // Verificar se há dados antes de formatar
        if (data.data) {
          const formattedData = data.data.map(item => ({
            id: item.id,
            ...item.attributes
          }));
          setDados(formattedData);
        } else {
          console.warn(`⚠️ Resposta inesperada para ${collectionName}:`, data);
          setDados([]);
        }
        
      } catch (error) {
        console.error(`❌ Erro ao buscar ${collectionName}:`, error);
        setErro(error.message);
        setDados([]);
        
        // Adicionar mensagem mais amigável
        if (error.message.includes('404')) {
          console.error(`🔍 Endpoint não encontrado. Verifique se a coleção "${collectionName}" existe no Strapi.`);
        }
      } finally {
        setCarregando(false);
      }
    };

    fetchData();
  }, [collectionName, limit]);

  return { dados, carregando, erro };
};

export default useStrapiData;