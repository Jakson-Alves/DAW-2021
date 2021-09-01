const express = require('express');
const routes = express.Router();

const groupController = require('../controllers/group-controller');


routes.route('/')
    .get('/', groupController.index)
    .post('/', groupController.create);

routes.route('/:id')
    .group(Controller.show)
    .put(groupController.update)
    .delete(groupController.delete);


module.exports = routes;