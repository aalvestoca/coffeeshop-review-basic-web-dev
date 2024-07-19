const { getProductSizesFromDB, getProductAttributesFromDB } = require('./productModel')

test('Get sizes of a specific product', async () => {
    getProductSizesFromDB('Caffè Misto', sizes => {
        expect(sizes.length).toBe(20);
    })
});

test('Get all attributes names of a product', async () => {
    getProductAttributesFromDB(attributes => {
        expect(attributes.length).toBe(15);
    })
});