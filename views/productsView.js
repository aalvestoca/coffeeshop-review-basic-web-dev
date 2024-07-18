const ASSETS_PATH = "../assets"

function showProductNames(click) {
    const { getProductNames } = require('../controllers/productsController')
    getProductNames(productNames => {
        productNames.forEach(productName => {
            const pElement = document.createElement('p');
            pElement.textContent = productName;
            pElement.classList.add("productname-menu");
            pElement.addEventListener('click', click)
            document.getElementById("product-names").appendChild(pElement);
        });
    })
}

function showProductName(productName) {
    document.querySelector("#product-header h2").innerText = productName;
}

function showSizes(productName) {
    document.querySelector("#size-options").innerHTML = productArray.filter(p => p.Product_Name === productName)
        .map(m => `<div class="option ${m.Size === "grande" && "selected"}"><figure>
                <img src="${ASSETS_PATH}/product-placeholder.png" alt="${m.Size}" width="64"/>
                <figcaption><p>${m.Size}</p><p>${m.Serv_Size_mL} ml</p></figcaption>
            </figure></div>`).join("")
}

function showIncludedIngredients(productName) {
    document.querySelector("#included-options").innerHTML = productArray.filter(p => p.Product_Name === productName && p.Size === "grande")
        .map(m => `<div class="option">
    <p>Milk: ${m.Milk}</p>
    <p>Calories: ${m.Calories}</p>
    <p>Whip: ${m.Whip}</p>
    <p>Sodium: ${m.Sodium_mg} mg</p>
    <p>Caffeine: ${m.Caffeine_mg} mg</p>
    </div>`).join("")
}

module.exports = { showProductNames, showProductName, showSizes, showIncludedIngredients }