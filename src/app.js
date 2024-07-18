const { showProductNames, showProductName, showSizes, showIncludedIngredients } = require('../views/productsView')

showProductNames(getDetails)

function getDetails(productElement) {
    const productName = productElement.target.textContent
    showProductName(productName);
    showSizes(productName);
    showIncludedIngredients(productName);
}
