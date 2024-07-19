const { getProductNames, getProductByName } = require('../controllers/productsController')
const { getSizes } = require('../controllers/productController')

const ASSETS_PATH = "../assets"

function createElementDrinkMenu(click, callback) {
    getProductNames(productNames => {
        const pParent = document.createElement('div');
        productNames.forEach(productName => {
            const pElement = document.createElement('p');
            pElement.textContent = productName;
            pElement.classList.add("productname-menu");
            pElement.addEventListener('click', click);
            pParent.appendChild((pElement))
        });
        callback(pParent)
    })
}

function createElementSizes(productName, callback) {
    getSizes(productName, sizes => {
        callback(sizes.map(size => `<div class="option ${size === "grande" && "selected"}"><figure>
            <img src="${ASSETS_PATH}/product-placeholder.png" alt="${size}" width="64"/>
            <figcaption><p>${size}</p></figcaption>
        </figure></div>`).join(""))
    })
}

function createElementIngredients(productName, callback) {
    getProductByName(productName, product => {
        callback(`<div class="option">
        <p>Milk: ${product.Milk}</p>
        <p>Whip: ${product.Whip}</p>
        <p>Serv_Size_mL: ${product.Serv_Size_mL}</p>
        <p>Calories: ${product.Calories}</p>
        <p>Total_Fat_g: ${product.Total_Fat_g}</p>
        <p>Saturated_Fat_g: ${product.Saturated_Fat_g}</p>
        <p>Trans_Fat_g: ${product.Trans_Fat_g}</p>
        <p>Cholesterol_mg: ${product.Cholesterol_mg}</p>
        <p>Sodium_mg: ${product.Sodium_mg}</p>
        <p>Total_Carbs_g: ${product.Total_Carbs_g}</p>
        <p>Fiber_g: ${product.Fiber_g}</p>
        <p>Sugar_g: ${product.Sugar_g}</p>
        <p>Caffeine_mg: ${product.Caffeine_mg}</p>
        </div>`)
    })
}

module.exports = { createElementDrinkMenu, createElementSizes, createElementIngredients }