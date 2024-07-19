const { getProductsFromDB, getProductNamesFromDB } = require('../models/productsModel')
const { sanitizeProduct } = require('./productController')

var productArray = [];
var productNameArray = [];

function getProducts(callback) {
    productArray.length > 0 ? callback(productArray) :
        getProductsFromDB(products => {
            productArray = products.map(p=>sanitizeProduct(p))
            callback(productArray)
        })
}

function getProductByName(name, callback) {
    getProducts(products => {
        callback(products.find(p => p.name === name))
    })
}

function getProductNames(callback) {
    productNameArray.length > 0 ? callback(productNameArray) :
        getProductNamesFromDB(productNames => {
            productNameArray = productNames
            callback(productNames)
        })
}

module.exports = { getProducts, getProductNames, getProductByName }