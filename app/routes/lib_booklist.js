const {showBookListPage,changeBookStatus} = require('../controllers/lib_booklist');
const {isLoggedIn}= require('../controllers/addbook');
module.exports = function (app) {
    app.get('/booklist',isLoggedIn,showBookListPage);
    app.get('/booklist/:id',isLoggedIn,changeBookStatus)
};