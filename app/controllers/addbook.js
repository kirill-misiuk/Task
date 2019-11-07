const {Book, Library} = require('../../config/sequelize');

function sendBookData(req,res){
    Book.create({
        name:req.body.name,
        author:req.body.author,
        library_id:1,
        page_count:234,
        year:req.body.year,
        status:1,
        createdAt:Date(),
        updatedAt:Date()
    }).then(()=>res.redirect('/'))
        .catch((e)=>{
        console.log(e)
    })
}
function showAddBookPage(req,res) {
    res.render('addbook')
}
module.exports={showAddBookPage,sendBookData};