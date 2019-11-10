const {Book, Library} = require('../../config/sequelize');
const findBook =(id)=>Book.findOne({raw:true,where:{id:id}});
const findLibrary=(id)=>Library.findOne({raw:true,where:{id:id}});
function showBookPage(req,res) {
   let book,library;
   findBook(req.params.id)
       .then(result=>book=result)
       .then(()=>
       findLibrary(book.library_id))
       .then(result=>library=result)
       .then(()=> res.render('aboutbook',{
          book:book,
          library:library
       }))

}
module.exports={showBookPage};