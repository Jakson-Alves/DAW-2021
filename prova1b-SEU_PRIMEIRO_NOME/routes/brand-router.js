const express = require('express');

//Instancio a rota do express
const routes = express.Router();

//Importo o groupController
const brandController = require('../controllers/brand-controller');

//Rotas raís (/)
routes.route('/')
    .get(brandController.index)       //Retorna todos os registro
    .post(brandController.create);    //Insere um registro

//Rotas identificadas por um ID
routes.route('/:id')
    .get(brandController.show)        //Retorna registro com o ID do parâmetro
    .put(brandController.update)      //Altera o registro com o ID do parâmetro
    .delete(brandController.delete);   //Exclui o registro com o ID do parâmetro

module.exports = routes;