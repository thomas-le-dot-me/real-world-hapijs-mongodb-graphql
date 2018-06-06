const config = require('./config/server/index');
const mongoosedb = require('./config/database/index');
const hapi = require('hapi');

const server = hapi.server({
    port : config.port,
    host: config.host
});

const init = async () => {
    await mongoosedb.connect();
    await server.start();
    console.log('Server is running at : ' + server.info.uri);
}

init();