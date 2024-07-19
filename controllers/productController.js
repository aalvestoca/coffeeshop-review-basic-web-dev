const { getProductSizesFromDB } = require('../models/productModel')

const MilkType = ["None", "Nonfat", "2%", "Soy", "Coconut", "Whole"]

const SizeMl = { short: 236, tall: 354, grande: 473, venti: 591, trenta: 887 }

function getSizes(name, callback) {
    getProductSizesFromDB(name, sizes => {
        callback(Array.from(new Set(sizes)).map(size => { return { sizename: size, size: SizeMl[size] || "" } }))
    })
}

function sanitizeProduct(productFromDB) {
    return {
        name: productFromDB.Product_Name,
        sizename: productFromDB.Size,
        size: SizeMl[productFromDB.Size],
        milk: MilkType[productFromDB.Milk],
        whip: productFromDB.Whip ? "Yes" : "No",
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

module.exports = { getSizes, sanitizeProduct }