var productArray = [];
var productNameArray = [];

function getProductNames(callback){
    productNameArray.length > 0 ? callback(productNameArray) :
    getProductNamesFromDB(productNames=>{
        callback(productNames)
    })
}