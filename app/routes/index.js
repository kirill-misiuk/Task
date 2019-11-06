const {showIndexPage} = require('../controllers/index')
module.exports = function (app) {
    app.get('/', showIndexPage)
};