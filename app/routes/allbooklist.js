const {showIndexPage} = require('../controllers/allbooklist');
module.exports = function (app) {
    app.get('/allbooklist', showIndexPage);
};