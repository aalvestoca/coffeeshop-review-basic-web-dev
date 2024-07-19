const { getProductsFromDB, getProductNamesFromDB } = require('../models/productsModel')

var productArray = [];
var productNameArray = [];

function getProducts(callback) {
    productArray.length > 0 ? callback(productArray) :
        getProductsFromDB(products => {
            productArray = products
            callback(products)
        })
}

function getProductByName(name, callback) {
    getProducts(products => {
        callback(products.find(p => p.Product_Name === name))
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