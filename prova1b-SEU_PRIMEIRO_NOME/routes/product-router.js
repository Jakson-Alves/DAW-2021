const express = require('express');

//Instancio a rota do express
const routes = express.Router();

//Importo o productController
const productController = require('../controllers/product-controller');

//Rotas raís (/)
routes.route('/')
    .get(productController.index)       //Retorna todos os registro
    .post(productController.create);    //Insere um registro

//Rotas identificadas por um ID
routes.route('/:id')
    .get(productController.show)        //Retorna registro com o ID do parâmetro
    .put(productController.update)      //Altera o registro com o ID do parâmetro
    .delete(productController.delete);   //Exclui o registro com o ID do parâmetro

module.exports = routes;