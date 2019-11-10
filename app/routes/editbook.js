const {showAddBookPage, sendBookData, isLoggedIn} = require('../controllers/editbook');
module.exports = function (app) {
    app.get('/editbook', isLoggedIn, showAddBookPage);
    app.post('/editbook/:id', sendBookData)
};