"use strict";

module.exports = {
  async bootstrap({ strapi }) {
    console.log("?? BOOTSTRAP INICIADO: Registrando APIs...");
    
    // Forçar registro de todas as content-types
    try {
      await strapi.contentTypes.initialize();
      console.log("? APIs registradas com sucesso!");
      
      // Forçar recarregamento das permissões
      await strapi.plugin("users-permissions").service("users-permissions").initialize();
      console.log("? Permissões inicializadas!");
    } catch (error) {
      console.error("? Erro no bootstrap:", error.message);
    }
  },
};
