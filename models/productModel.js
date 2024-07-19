const { getProductsFromDB } = require('./productsModel')

function getProductSizesFromDB(productName, callback) {
    getProductsFromDB(products => callback(
        products.filter(p => p.Product_Name === productName).map(p => p.Size)))
}

function getProductAttributesFromDB(callback) {
    getProductsFromDB(products => products.length ? callback(Object.keys(products[0])) : callback([]))
}

module.exports = { getProductSizesFromDB, getProductAttributesFromDB }