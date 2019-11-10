const {showMainPage} = require('../controllers');
module.exports = function (app) {
    app.get('/', showMainPage);
};