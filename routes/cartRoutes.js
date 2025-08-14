const express = require('express');
const routes = express.Router();

routes.get('/:userId',(req,res)=>{
    const userId = req.params.userId;
    res.send(`Fetching cart for user with ID: ${userId}`);
})

routes.post('/:userId',(req,res)=>{
    const userId = req.params.userId;
    res.send(`Adding product to cart for user with ID: ${userId}`);
})


module.exports = routes;