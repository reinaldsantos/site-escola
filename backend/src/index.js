"use strict";

module.exports = {
  async bootstrap({ strapi }) {
    console.log("?? BOOTSTRAP INICIADO: Registrando APIs...");
    
    // For�ar registro de todas as content-types
    try {
      await strapi.contentTypes.initialize();
      console.log("? APIs registradas com sucesso!");
      
      // For�ar recarregamento das permiss�es
      await strapi.plugin("users-permissions").service("users-permissions").initialize();
      console.log("? Permiss�es inicializadas!");
    } catch (error) {
      console.error("? Erro no bootstrap:", error.message);
    }
  },
};
