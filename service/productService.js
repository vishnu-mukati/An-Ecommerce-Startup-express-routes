
const getProductsService = () => {
    return "Fetching all products";
};

const postProductsService = () => {
    return "Adding a new product";
};

const getProductByIdService = (id) => {
    return `Fetching product with ID: ${id}`;
};

module.exports = {
    getProductsService,
    postProductsService,
    getProductByIdService
}