const path = require('path');

const getProducts = (req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "view", "product.html"));
};

const postProducts = (req, res) => {

    const data = req.body;
    console.log(data);
    res.json({ "value": data.productName });
};

const getProductById = (req, res) => {
    const id = req.params.id;
    res.send(`Fetching product with ID: ${id}`);
};

module.exports = {
    getProducts,
    postProducts,
    getProductById,
};
