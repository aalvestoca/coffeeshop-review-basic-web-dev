const { getSizesOfProduct } = require('./productController')

test('Get sizes of a specific product', async () => {
    getSizesOfProduct('Caffè Misto', sizes => {
        expect(sizes.length).toBe(4);
    })
});