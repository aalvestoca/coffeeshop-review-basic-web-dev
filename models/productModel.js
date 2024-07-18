const { getProductsFromDB } = require('./productsModel')

function getProductSizesFromDB(productName, callback) {
    getProductsFromDB(products => callback(
        products.filter(p=>p.Product_Name === productName).map(p=>p.Size)))
}

module.exports = { getProductSizesFromDB }