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
        callback(sizes.map(size => `<div class="option ${size.sizename === "grande" && "selected"}"><figure>
            <img src="${ASSETS_PATH}/product-placeholder.png" alt="${size.sizename}" width="64"/>
            <figcaption><p>${size.sizename}</p><p>${size.size && size.size + " ml"}</p></figcaption>
        </figure></div>`).join(""))
    })
}

function createElementIngredients(productName, callback) {
    getProductByName(productName, product => {
        callback(`<div class="option">
        <p><span>Milk</span></span>: ${product.milk}</p>
        <p><span>Whip</span>: ${product.whip}</p>
        <p><span>Size</span>: ${product.size}</p>
        <p><span>Calories</span>: ${product.calories}</p>
        <p><span>Total Fat</span>: ${product.totalFat} g</p>
        <p><span>Saturated Fat</span>: ${product.saturatedFat} g</p>
        <p><span>Trans Fat</span>: ${product.transFat} g</p>
        <p><span>Cholesterol</span>: ${product.cholesterol} mg</p>
        <p><span>Sodium</span>: ${product.sodium} mg</p>
        <p><span>Total Carbs</span>: ${product.totalCarbs} g</p>
        <p><span>Fiber</span>: ${product.fiber} g</p>
        <p><span>Sugar</span>: ${product.sugar} g</p>
        <p><span>Caffeine</span>: ${product.caffeine} mg</p>
        </div>`)
    })
}

module.exports = { createElementDrinkMenu, createElementSizes, createElementIngredients }