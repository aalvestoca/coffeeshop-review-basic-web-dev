const { getProductsFromDB, getProductNamesFromDB, getProductsByNameFromDB } = require("./productsModel")

test('Products on database greater than 0', async () => {
  getProductsFromDB(products =>
    expect(products.length).toBeGreaterThan(0)
  )
});

test('Product names on database greater than 0', async () => {
  getProductNamesFromDB(productNames =>
    expect(productNames.length).toBeGreaterThan(0)
  )
});

test('Get specific products by name', async () => {
  getProductsByNameFromDB('Caffè Misto',products=>{
    expect(products.length).toBe(20)
  })
})