const { getProductSizesFromDB, getProductAttributesFromDB } = require('../models/productModel')

function getSizes(name, callback){
    getProductSizesFromDB(name, sizes=>{
        callback(Array.from(new Set(sizes)))
    })
}

function getIngredients(callback){
    getProductAttributesFromDB(attributes=>{
        callback(attributes.filter(a=>a !== 'Product_Name' && a !== 'Size'))
    })
}

function sanitizeProduct(productFromDB){
    return {
        name : productFromDB.Product_Name,
        sizename: productFromDB.Size,
        milk : productFromDB.Milk,
        whip : productFromDB.Whip,
        size: productFromDB.Serv_Size_mL,
        calories: productFromDB.Calories,
        totalFat: productFromDB.Total_Fat_g,
        saturatedFat: productFromDB.Saturated_Fat_g,
        transFat: productFromDB.Trans_Fat_g,
        cholesterol: productFromDB.Cholesterol_mg,
        sodium: productFromDB.Sodium_mg,
        totalCarbs: productFromDB.Total_Carbs_g,
        fiber: productFromDB.Fiber_g,
        sugar: productFromDB.Sugar_g,
        caffeine: productFromDB.Caffeine_mg
    }
}

module.exports = { getSizes, getIngredients, sanitizeProduct }