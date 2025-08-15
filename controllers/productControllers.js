const {
  getProductsService,
  postProductsService,
  getProductByIdService,
} = require("../service/productService");
const path = require('path');

const getProducts = (req, res) => {
    // const result = getProductsService();
    // res.send(result);
    res.sendFile(path.join(__dirname,"..","view","product.html"));
};

const postProducts = (req, res) => {
 const result = postProductsService();
    res.send(result);
};

const getProductById = (req, res) => {
 const id = req.params.id;
    const result = getProductByIdService(id);
    res.send(result);
};

module.exports = {
  getProducts,
  postProducts,
  getProductById,
};
