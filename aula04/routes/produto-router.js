const express = require('express');

//importa o porduto Controller
const produtoController = require('../controllers/produto-controller');

//Instancio um router para determinar as rotas
const routes = express.Router();

//Rota principal (index)
routes.get('/produtos', produtoController.index);

//Rota para trazer um registro (show)
routes.get('/produtos/:id', produtoController.show);

//Rota para adicionar um recurso (create)
routes.post('/produtos', produtoController.create);

module.exports = routes;