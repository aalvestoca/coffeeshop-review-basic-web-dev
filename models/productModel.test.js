const { getProductSizesFromDB } = require('./productModel')

test('Get sizes of a specific product', async () => {
    getProductSizesFromDB('Caffè Misto', sizes => {
        expect(sizes.length).toBe(20);
    })
});