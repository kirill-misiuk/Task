const {showIndexPage,changeBookStatus} = require('../controllers/index');
module.exports = function (app) {
    app.get('/index', showIndexPage);
    // app.get('/:id',changeBookStatus)
};