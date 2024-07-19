const { getSizes, getIngredients } = require('./productController')

test('Get sizes of a specific product', async () => {
    getSizes('Caffè Misto', sizes => {
        expect(sizes.length).toBe(4);
    })
});

test('Get ingredients of a product', async () => {
    getIngredients(ingredients => {
        expect(ingredients.length).toBe(13);
    })
});