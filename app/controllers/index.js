const {Book, Library} = require('../../config/sequelize');

function showIndexPage(req, res) {
    let booklist;
    return (
        Book.findAll({
            raw: true,
        })
    ).then(result => booklist = result)
        .then(() => res.render('index', {
            booklist: booklist
        })).catch((err) => {
            console.log(err)
        })
}

module.exports = {showIndexPage};