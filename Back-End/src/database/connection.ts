import knex from "knex";
import "dotenv/config";

const connection = knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
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
