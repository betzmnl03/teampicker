// Update with your config settings.

require('dotenv').config({path: './.env'});
module.exports = {
    client: 'pg',
    debug: true,
    connection: "postgres://mreafmenwkgmod:a0d1fd20d74d41ef965a7d1603d4c0e8b17d33185516bdf513a55321d518f123@ec2-34-239-33-57.compute-1.amazonaws.com:5432/d33opsq5pvq4b9",
    migrations:{
      tableName:"migrations",
      directory:"./db/migrations"
    },
    // ssl: true 
}
