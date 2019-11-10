const {Book, Library} = require('../../config/sequelize');

const addLibraryBookList = (req) => Book.findAll({raw: true, where: {library_id: req.user.id}});
const addLibraryList = () => Library.findAll({raw: true});
const findBookByID = (id) => Book.findOne({raw: true, where: {id: id}});

function showBookListPage(req, res) {
    let booklist, library;
    addLibraryBookList(req).then(result => booklist = result)
        .then(() => addLibraryList())
        .then(result => library = result)
        .then(() => res.render('libooklist', {
            booklist: booklist,
            library: library,
            user: req.user
        })).catch((err) => {
        console.log(err)
    });
}

function changeBookStatus(req, res) {
    let id = req.params.id;
    findBookByID(id)
        .then(res => {
            if (res) {
                const status = 1 - res.status;
                return Book.update({status}, {where: {id}});
            }
        })
        .then(() => res.redirect('/libooklist'));
}

module.exports = {showBookListPage, changeBookStatus};