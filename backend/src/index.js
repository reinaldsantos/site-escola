"use strict";

module.exports = {
  async bootstrap({ strapi }) {
    console.log("?? BOOTSTRAP: Forçando registro de content-types...");
    
    // Força o registro das APIs
    try {
      // Isso garante que todas as content-types sejam registradas
      await strapi.contentTypes.initialize();
      console.log("? APIs registradas com sucesso!");
    } catch (error) {
      console.error("? Erro ao registrar APIs:", error.message);
    }
  },
};
