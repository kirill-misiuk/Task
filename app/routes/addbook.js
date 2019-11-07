const {showAddBookPage,sendBookData,isLoggedIn} = require('../controllers/addbook')
module.exports = function (app) {
    app.get('/addbook',isLoggedIn,showAddBookPage);
    app.post('/addbook',sendBookData)
};