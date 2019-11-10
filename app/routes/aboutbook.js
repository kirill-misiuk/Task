const {showBookPage} = require('../controllers/aboutbook')
module.exports = function (app) {
    app.get('/book/:id', showBookPage)
};