const mysql = require('mysql');
const config = require('./config.js');

const connection = mysql.createConnection(config);

module.exports.connection = connection;

module.exports.connection.connect(err => {
    if (err) {
        console.log('Error connecting to database', err.stack);
    } else {
        console.log('Database connected successfully');
    }
});