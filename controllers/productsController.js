const { getProductsFromDB, getProductNamesFromDB } = require('../models/productsModel')
const { getProductSizesFromDB } = require('../models/productModel')

var productArray = [];
var productNameArray = [];

function getProducts(callback) {
    productArray.length > 0 ? callback(productArray) :
        getProductsFromDB(products => {
            productArray = products
            callback(products)
        })
}

function getProductNames(callback) {
    productNameArray.length > 0 ? callback(productNameArray) :
        getProductNamesFromDB(productNames => {
            productNameArray = productNames
            callback(productNames)
        })
}

module.exports = { getProducts, getProductNames }