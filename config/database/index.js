require('dotenv').config();
const mongoose = require('mongoose');

// const databaseUser = process.env.DB_USER;
// const databasePassword = process.env.DB_PASS;
// const databaseHost = process.env.DB_HOST; 
const databaseHost = process.env.DB_HOST; 

module.exports = {
    connect() {
        mongoose.connect(databaseHost);
        mongoose.connection.once('open', () => {
            console.log('Connected');
        });
    }
}