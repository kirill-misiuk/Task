const {Book} = require('../../config/sequelize');
const addBook = (req) => Book.findOne({raw: true, where: {id: req.params.id}});

function editBookData(req, res) {
    return Book.update({
            name: req.body.name,
            author: req.body.author,
            page_count: req.body.page_count,
            year: req.body.year,
            updatedAt: Date()
        },
        {
            where: {id: req.params.id}
        }).then(() => res.redirect('/libooklist'))
}

function showEditBookPage(req, res) {
    let book;
    addBook(req)
        .then(result => book = result)
        .then(() =>
            res.render('editbook', {
                book: book,
                user: req.user
            }))
}

function deleteBook(req, res) {
    Book.destroy({raw: true, where: {id: req.params.id}})
        .then(() => res.redirect('/libooklist'))
}

function cancelPage(req, res) {
    res.redirect('/libooklist')
}

module.exports = {showEditBookPage, editBookData, deleteBook, cancelPage};