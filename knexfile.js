const path = require('path');

require("dotenv").config(
  {
    path: path.join(__dirname, './.env')
  }
);
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST || "127.0.0.1",
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: __dirname +"/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds-development",
    }
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    searchPath: 'public',
    pool: {
      min: 2,
      max:10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds",
    }
  }
};