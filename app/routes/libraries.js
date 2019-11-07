const {showLibrariesPage} = require('../controllers/libraries')
module.exports = function (app) {
    app.get('/libraries', showLibrariesPage)
};