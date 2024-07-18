const ASSETS_PATH = "./assets"

function showProductNames() {
    getProductNames(productNames => {
        document.getElementById("product-names").innerHTML =
            productNames.map(productName => `<p id="${productName}" class="productname-menu" onClick="getDetails('${productName}')">${productName}</p>`).join("")
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
    <p>Sodium_mg: ${m.Sodium_mg} mg</p>
    <p>Caffeine_mg: ${m.Caffeine_mg} mg</p>
    </div>`).join("")
}