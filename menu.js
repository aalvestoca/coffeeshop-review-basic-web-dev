var productArray = [];
var productNameArray = [];

function getProductNames(callback) {
    fetch("./starbucks-nutrition.json").then(text => text.json()).then(products => {
        productArray = products;
        productNameArray = Array.from(new Set(products.map(product => product.Product_Name)));
            
        callback();
    })
}