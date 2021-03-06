// Update with your config settings.

require('dotenv').config({path: './.env'});
module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    },
    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL,
      migrations: {
        tableName: 'knex_migrations'
      }
    },

    migrations:{
      tableName:'migrations',
      directory: './db/migrations'
    },
    seeds:{
      directory:'./db/seeds'
    }
  },

  
};
