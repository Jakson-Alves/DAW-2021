const express = require('express');

//instancio a rota do express
const routes = express.Router();

//Importo o productController
const groupController = require('../controllers/group-controller');

//Rotas raíz (/)
routes.route('/')
    .get(groupController.index)     //list todos os registros
    .post(groupController.create); //Insere um registro

//Rotas identificadas por um ID
routes.route('/:id')
    .get(groupController.show)          //Retorna o registro com o ID do parametro
    .put(groupController.update)       //Altera o registro com o ID do parametro
    .delete(groupController.delete);  //Exclui o registro com o ID do parametro


module.exports = routes;