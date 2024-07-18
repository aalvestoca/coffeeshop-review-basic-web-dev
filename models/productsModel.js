function getProductsFromDB(callback) {
    const json = require('../models/starbucks-nutrition.json')
    productArray = json
    callback(json)
}

function getProductNamesFromDB(callback) {
    getProductsFromDB(products => {
        productNameArray = Array.from(new Set(products.map(product => product.Product_Name)));
        callback(productNameArray);
    })
}

module.exports = { getProductsFromDB, getProductNamesFromDB }