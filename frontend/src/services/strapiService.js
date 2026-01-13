// ================================================
// STRAPI SERVICE UNIVERSAL - NUNCA MAIS MEXER
// Use em QUALQUER componente para QUALQUER coleção
// ================================================

import CONFIG_STRAPI from '../config.js';

export const strapiService = {
    // ========== MÉTODO PRINCIPAL ==========
    // Para buscar QUALQUER coleção: strapiService.buscar('nomedacolecao')
    buscar: async (colecao, limite = 10) => {
        console.log(`🚀 strapiService.buscar("${colecao}")`);
        return await CONFIG_STRAPI.buscar(colecao, limite);
    },
    
    // ========== MÉTODOS ESPECÍFICOS (opcionais) ==========
    getNoticias: (limite = 3) => CONFIG_STRAPI.buscar('noticias', limite),
    getEventos: (limite = 5) => CONFIG_STRAPI.buscar('eventos', limite),
    getCursos: (limite = 20) => CONFIG_STRAPI.buscar('cursos', limite),
    
    // ========== FUNÇÕES AUXILIARES ==========
    getImagemUrl: CONFIG_STRAPI.getImagemUrl,
    extrairTexto: CONFIG_STRAPI.extrairTexto
};

// EXEMPLOS DE USO FUTURO:
// 1. Professores: await strapiService.buscar('professores')
// 2. Galeria: await strapiService.buscar('galeria')
// 3. Projetos: await strapiService.buscar('projetos')
// NUNCA PRECISA ALTERAR ESTE ARQUIVO!
