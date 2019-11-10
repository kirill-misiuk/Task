const BookModel = require('../models/books');
const LibraryModel = require('../models/libraries')
const Sequelize = require('sequelize');
const reconnectOptions = {
    max_retries: 999,
    onRetry: function(count) {
        console.log("connection lost, trying to reconnect ("+count+")");
    }
};
const sequelize = new Sequelize('bofsd7plrbhrvba1cobh', 'udl5boqszgimeawr', 'fbgSmoTWoUhGyNK5txe2', {
    host: 'bofsd7plrbhrvba1cobh-mysql.services.clever-cloud.com',
    dialect: 'mysql',
    port: 3306,
    pool: {
        max: process.env.MYSQL_MASTER_CONNECTION_LIMIT,
        min: 1,
        acquire: 30000,
        idle: 10000,
        logging: false,
        reconnect: reconnectOptions || true
    }
});
const Book = BookModel(sequelize, Sequelize);
const Library = LibraryModel(sequelize, Sequelize);
sequelize.sync()
    .then(() => {
        console.log(`Database & tables sync`)
    });
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
module.exports = {Book, Library};