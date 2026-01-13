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
        
        const url = `http://localhost:1337/api/${collectionName}?populate=*&sort=createdAt:DESC${limit ? `&pagination[pageSize]=${limit}` : ''}`;
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`Erro ${response.status}`);
        }
        
        const data = await response.json();
        
        // Converter formato Strapi v5
        if (data.data) {
          const formattedData = data.data.map(item => ({
            id: item.id,
            ...item.attributes
          }));
          setDados(formattedData);
        } else {
          setDados(data);
        }
        
      } catch (error) {
        console.error(`Erro ao buscar ${collectionName}:`, error);
        setErro(error.message);
        setDados([]);
      } finally {
        setCarregando(false);
      }
    };

    fetchData();
  }, [collectionName, limit]);

  return { dados, carregando, erro };
};

export default useStrapiData;
