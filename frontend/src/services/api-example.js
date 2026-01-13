// Exemplo de uso no React - src/services/api.js
import API_CONFIG from '../config';

export const getNoticias = async () => {
    try {
        const response = await fetch(API_CONFIG.getNoticias());
        if (!response.ok) throw new Error('Erro na API');
        
        const data = await response.json();
        
        // Strapi v5 retorna { data: [...] }
        if (data.data) {
            return data.data.map(item => ({
                id: item.id,
                ...item.attributes
            }));
        }
        
        return data;
    } catch (error) {
        console.error('Erro ao buscar notícias:', error);
        return [];
    }
};

export const getNoticiaById = async (id) => {
    try {
        const response = await fetch(\\/noticias/\?populate=*\);
        if (!response.ok) throw new Error('Erro na API');
        
        const data = await response.json();
        return {
            id: data.data.id,
            ...data.data.attributes
        };
    } catch (error) {
        console.error('Erro ao buscar notícia:', error);
        return null;
    }
};
