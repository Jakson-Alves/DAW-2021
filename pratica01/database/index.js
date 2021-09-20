const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
      password : 'root',
      database : 'dawdb'
    }
  });

  //para que possa ser assumido por outros arquivos
  module.exports = knex;