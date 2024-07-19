const { getSizes } = require('./productController')

test('Get sizes of a specific product', async () => {
    getSizes('Caffè Misto', sizes => {
        expect(sizes.length).toBe(4);
    })
});
