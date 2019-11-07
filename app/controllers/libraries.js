const {Library} = require('../../config/sequelize');
const addLibraryList = () => Library.findAll({raw: true});

function showLibrariesPage(req, res) {
    let libArr;
    return (addLibraryList()
            .then(result => libArr = result)
            .then(() => res.render('libraries', {
                libArr: libArr
            })).catch((err) => {
                console.log(err)
            })
    )
}

module.exports = {showLibrariesPage};