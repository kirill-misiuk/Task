const {showBookPage} = require('../controllers/book')
module.exports = function (app) {
    app.get('/book/:name', showBookPage)
};