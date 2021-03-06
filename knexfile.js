// Update with your config settings.

require('dotenv').config({path: './.env'});
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'team',
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
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
