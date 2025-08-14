const express = require('express');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const app = express();

app.use('/user',userRoutes);
app.use('/product',productRoutes);
app.use('/cart',cartRoutes);

app.get('*',(req,res)=>{
    res.statusCode = 404;
    res.send("Page not found")
})

const port = 4000;
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})