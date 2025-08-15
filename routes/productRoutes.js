const express = require('express');
const routes = express.Router();
const productController = require('../controllers/productControllers');
const postController = require('../controllers/productControllers');
const productControllerById = require('../controllers/productControllers');

routes.get('/',productController.getProducts);

routes.post('/',postController.postProducts);

routes.get('/:id',productControllerById.getProductById);


module.exports = routes;