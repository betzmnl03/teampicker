const knex = require('knex')({client:"pg"});
const knexfile= require('../knexfile'); //.. is out into the parent directory
const client = knex(knexfile.development);


module.exports = client;

