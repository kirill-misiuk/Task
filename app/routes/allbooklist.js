const {showIndexPage,changeBookStatus} = require('../controllers/all_booklist');
module.exports = function (app) {
    app.get('/index', showIndexPage);
    app.post('/index',function (req,res) {
        res.redirect('/allbooklist')
    })
};