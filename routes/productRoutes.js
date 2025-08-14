const express = require('express');
const routes = express.Router();

routes.get('/',(req,res)=>{
    res.send("Fetching all products");
})

routes.post('/',(req,res)=>{
    res.send("Adding a new product");
})

routes.get('/:id',(req,res)=>{
    const id = req.params.id;
    res.send(`Fetching product with ID: ${id}`);
})


module.exports = routes;