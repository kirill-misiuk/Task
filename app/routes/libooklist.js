const {showBookListPage,changeBookStatus} = require('../controllers/libooklist');
const {isLoggedIn}= require('../controllers/addbook');
module.exports = function (app) {
    app.get('/libooklist',isLoggedIn,showBookListPage);
    app.get('/libooklist/:id',isLoggedIn,changeBookStatus)
};