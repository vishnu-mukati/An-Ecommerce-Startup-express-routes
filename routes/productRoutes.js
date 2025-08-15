const express = require('express');
const routes = express.Router();
const productController = require('../controllers/productControllers');

routes.get('/',productController.getProducts);

routes.post('/',productController.postProducts);

routes.get('/:id',productController.getProductById);


module.exports = routes;