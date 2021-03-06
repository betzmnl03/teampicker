// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'team',
      username:'betsy',
      password:'betsy'
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
