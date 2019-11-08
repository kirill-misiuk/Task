const {showIndexPage,changeBookStatus} = require('../controllers/index');
module.exports = function (app) {
    app.get('/', showIndexPage);
    // app.get('/:id',changeBookStatus)
};