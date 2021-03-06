// Update with your config settings.

require('dotenv').config({path: './.env'});
module.exports = {
    client: 'pg',
    debug: true,
    connection: DATBASE_URL,
    migrations:{
      tableName:"migrations"
    },
    ssl: true 
}
