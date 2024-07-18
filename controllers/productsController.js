const { getProductsFromDB, getProductNamesFromDB } = require('../models/productsModel')
var productArray = [];
var productNameArray = [];

function getProducts(callback) {
    productArray.length > 0 ? callback(productArray) :
        getProductsFromDB(productNames => {
            callback(productNames)
        })
}

function getProductNames(callback) {
    productNameArray.length > 0 ? callback(productNameArray) :
        getProductNamesFromDB(productNames => {
            callback(productNames)
        })
}

module.exports = { getProducts, getProductNames }