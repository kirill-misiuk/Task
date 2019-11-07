const {showAddBookPage,sendBookData} = require('../controllers/addbook')
module.exports = function (app) {
    app.get('/addbook',showAddBookPage);
    app.post('/addbook',sendBookData)
};