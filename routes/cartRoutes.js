const express = require('express');
const routes = express.Router();
const cartController = require('../controllers/cartController');

routes.get('/:userId',cartController.getCart);

routes.post('/:userId',cartController.postCart);


module.exports = routes;