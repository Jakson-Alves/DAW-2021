const express = require('express');

//instancio a rota do express
const routes = express.Router();

//Importo o productController
const productController = require('../controllers/product-controller');

//Rotas raíz (/)
routes.route('/')

    .get(productController.index)     //list todos os registros
    .post(productController.create); //Insere um registro

//Rotas identificadas por um ID
routes.route('/:id')
    .get(productController.show)                //Retorna o registro com o ID do parametro
    .put(productController.update)          //Altera o registro com o ID do parametro
    .delete(productController.delete);     //Exclui o registro com o ID do parametro 

module.exports = routes;