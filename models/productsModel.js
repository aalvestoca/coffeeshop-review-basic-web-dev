function getProductsFromDB(callback) {
    const json = require('../models/starbucks-nutrition.json')
    callback(json)
}

function getProductsByNameFromDB(name, callback) {
    getProductsFromDB(products => callback(products.filter(p=>p.Product_Name === name)))
}

function getProductNamesFromDB(callback) {
    getProductsFromDB(products => {
        const productNames = Array.from(new Set(products.map(product => product.Product_Name)));
        callback(productNames);
    })
}

module.exports = { getProductsFromDB, getProductsByNameFromDB, getProductNamesFromDB }