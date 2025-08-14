const express = require('express');
const routes = express.Router();

routes.get('/',(req,res)=>{
    res.send("Fetching all users");
})

routes.post('/',(req,res)=>{
    res.send("Adding a new user");
})

routes.get('/:id',(req,res)=>{
    const id = req.params.id;
    res.send(`Fetching user with ID: ${id}`);
})


module.exports = routes;