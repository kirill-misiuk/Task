const BookModel = require('../models/books');
const LibraryModel = require('../models/libraries')
const Sequelize = require('sequelize');
const sequelize = new Sequelize('YKx3mQnch7', 'YKx3mQnch7', 'CnMmeWQhET', {
    host: 'remotemysql.com',
    dialect: 'mysql',
    port: 3306,
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
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