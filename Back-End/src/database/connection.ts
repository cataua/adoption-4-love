import knex from "knex";

const connection = knex({
  client: "pg",
  connection: {
    host: "localhost",
    database: "adoption_forlove",
    user: "adoption4love",
    password: "DioXSquado2020!",
    insecureAuth: true,
    timezone: "-03:00",
  },
  searchPath: ["knex", "public"],
  pool: {
    min: 2,
    max: 10,
  },
  useNullAsDefault: true,
});

export default connection;
