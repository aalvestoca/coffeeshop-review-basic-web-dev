const { createElementDrinkMenu, createElementSizes, createElementIngredients } = require('../views/productsView')

createElementDrinkMenu(showProductDetails, newElement => {
    //Add element to Menu section
    const parentElement = document.querySelector("#product-names");
    if (parentElement.children.count)
        parentElement.replaceChild(parentElement.firstChild, newElement)
    else
        parentElement.appendChild(newElement)
})

function showProductDetails(productElement) {
    const productName = productElement.target.textContent
    document.querySelector("#product-header h2").innerText = productName
    createElementSizes(productName, newElement=>{
        document.querySelector("#size-options").innerHTML = newElement
    });
    createElementIngredients(productName, newElement=>{
        document.querySelector("#included-options").innerHTML = newElement
    });
}
