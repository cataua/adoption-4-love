module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'adoption_forlove',
      user: "postgres",
      password: "DioXSquado2020!",
      insecureAuth: true,
      timezone: '-03:00',
    },
    searchPath: ['knex', 'public'],
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'migrations',
      directory: './src/database/migrations',
    },
    seeds: {
      directory: './src/database/seeds/teste',
    },
  },
};