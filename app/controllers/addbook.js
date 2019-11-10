const {Book} = require('../../config/sequelize');

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
}

function sendBookData(req, res) {
    Book.create({
        name: req.body.name,
        author: req.body.author,
        library_id: req.user.id,
        page_count: req.body.page_count,
        year: req.body.year,
        status: 0,
        createdAt: Date(),
        updatedAt: Date()
    }).then(() => res.redirect('/libooklist'))
        .catch((e) => {
            console.log(e)
        })
}

function showAddBookPage(req, res) {
    res.render('addbook', {
        user: req.user
    })
}

module.exports = {showAddBookPage, sendBookData, isLoggedIn};