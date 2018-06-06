const config = require('./config/server/server.config');
const mongoosedb = require('./config/database/database.config');
const hapi = require('hapi');
const Product = require('./models/product.model');
const ProductRoutes = require('./routes/product.routes');

const server = hapi.server({
    port : config.port,
    host: config.host
});

const init = async () => {
    await mongoosedb.connect();
    await server.start();
    
    server.route(ProductRoutes);
    console.log('Server is running at : ' + server.info.uri);


}

init();

// UNDERSCORE_FOR_CONSTANTS
// camelForDeclarations
// Capitalforconstructors