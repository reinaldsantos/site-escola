'use strict';

// CONFIGURAÇÃO SUPER SIMPLES PARA RENDER
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-d5kgas94tr6s73au58pg-a.ohio-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi_5cj5'),
      user: env('DATABASE_USERNAME', 'strapidbsantos___p9ft_user'),
      password: env('DATABASE_PASSWORD', 'RE6QZLoFUQHvWV0iZAKIr6D5zf8wAMqG'),
      ssl: { rejectUnauthorized: false }
    },
  },
});
