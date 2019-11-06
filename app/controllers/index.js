const {Book, Library} = require('../../config/sequelize');
const addBookList = () => Book.findAll({raw: true});
const findLibraryName = () => Library.findAll({raw: true});

function showIndexPage(req, res) {
    let booklist, library;
    addBookList().then(result => booklist = result)
        .then(() => findLibraryName())
        .then(result => library = result)
        .then(() => res.render('index', {
            booklist: booklist,
            library: library
        })).catch((err) => {
        console.log(err)

    })

}

module.exports = {showIndexPage};