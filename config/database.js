module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi_5cj5'),
      user: env('DATABASE_USERNAME', 'strapidbsantos___p9ft_user'),
      password: env('DATABASE_PASSWORD', 'RE6QZLoFUQHvWV0iZAKIr6D5zf8wAMqG'),
      ssl: env.bool('DATABASE_SSL', true),
    },
    pool: {
      min: env.int('DATABASE_POOL_MIN', 0),
      max: env.int('DATABASE_POOL_MAX', 10),
    },
  },
});
