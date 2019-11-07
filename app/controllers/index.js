const {Book, Library} = require('../../config/sequelize');
const addBookList = () => Book.findAll({raw: true});
const addLibraryList = () => Library.findAll({raw: true});

function showIndexPage(req, res) {
    let booklist, library;
    addBookList().then(result => booklist = result)
        .then(() => addLibraryList())
        .then(result => library = result)
        .then(() => res.render('index', {
            booklist: booklist,
            library: library,
            user: req.user
        })).catch((err) => {
        console.log(err)
    })

}

module.exports = {showIndexPage};