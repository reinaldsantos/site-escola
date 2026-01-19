module.exports = async ({ strapi }) => {
  // Pega a Role 'Public' (id 1 geralmente)
  const role = await strapi.db.query('plugin::users-permissions.role').findOne({ where: { type: 'public' } });

  // Coleções que você quer liberar para público
  const permissionsToAdd = [
    'api::evento.evento',
    'api::curso.curso',
    'api::noticia.noticia',
  ];

  for (const perm of permissionsToAdd) {
    for (const action of ['find', 'findOne']) {
      // Verifica se a permissão já existe
      const exists = await strapi.db.query('plugin::users-permissions.permission').findOne({
        where: { action: `${perm}.${action}`, role: role.id }
      });

      if (!exists) {
        // Cria a permissão se não existir
        await strapi.db.query('plugin::users-permissions.permission').create({
          data: { action: `${perm}.${action}`, role: role.id, enabled: true }
        });
      }
    }
  }

  strapi.log.info('✅ Todas as coleções agora estão públicas!');
};
