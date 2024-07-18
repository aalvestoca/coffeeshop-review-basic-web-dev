function getProductsFromDB(callback) {
    fetch("./models/starbucks-nutrition.json").then(text => text.json()).then(products => {
        productArray = products;
        callback(productArray);
    })
}

function getProductNamesFromDB(callback) {
    getProductsFromDB(products => {
        productNameArray = Array.from(new Set(products.map(product => product.Product_Name)));
        callback(productNameArray);
    })
}