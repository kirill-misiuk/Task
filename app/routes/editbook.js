const {showEditBookPage, editBookData,deleteBook,cancelPage} = require('../controllers/editbook');
const{isLoggedIn}=require('../controllers/addbook');
module.exports = function (app) {
    app.get('/editbook/:id', isLoggedIn, showEditBookPage);
    app.post('/editbook/:id', editBookData);
    app.post('/delete/:id',deleteBook);
    app.post('/cancel',cancelPage);
};