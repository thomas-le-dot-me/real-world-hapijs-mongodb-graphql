const Product = require('./../../models/product.model');

module.exports = {
    find(req, res) {
        return Product.find();
    },
    add(req, res) {
        const {
            sku,
            title,
            description,
            quantity,
            pricing :{
                price,
                compare_at_price
            }
        } = req.payload;

        const product = new Product({
            sku,
            title,
            description,
            quantity,
            pricing :{
                price,
                compare_at_price
            }
        });

        return product.save();
    }
}