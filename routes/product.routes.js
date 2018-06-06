const ProductHandlers = require('./handlers/product.handlers');

const product_routes = [
    {
        method: 'GET',
        path:'/api/v1/products',
        handler: (req, res) => ProductHandlers.find(req, res)
    },  
    {
        method: 'POST',
        path:'/api/v1/products',
        handler: (req, res) => ProductHandlers.add(req, res)
    }   
]

module.exports = product_routes;