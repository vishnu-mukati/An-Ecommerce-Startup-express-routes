const {
  getProductsService,
  postProductsService,
  getProductByIdService,
} = require("../service/productService");

const getProducts = (req, res) => {
    const result = getProductsService();
    res.send(result);
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
