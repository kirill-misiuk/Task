const {showMainPage} = require('../controllers/main');
module.exports = function (app) {
    app.get('/', showMainPage);
};