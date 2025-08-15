const express = require('express');
const routes = express.Router();
const userController = require('../controllers/userController');

routes.get('/',userController.getUser);

routes.post('/',userController.postUser);

routes.get('/:id',userController.getUserById);


module.exports = routes;