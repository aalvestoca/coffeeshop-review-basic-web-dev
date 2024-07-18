const { getProductSizesFromDB } = require('../models/productModel')

function getSizesOfProduct(name, callback){
    getProductSizesFromDB(name, sizes=>{
        callback(Array.from(new Set(sizes)))
    })
}

module.exports = { getSizesOfProduct }