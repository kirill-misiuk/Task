const {Book, Library} = require('../../config/sequelize');
const findBook =(name)=>Book.findOne({raw:true,where:{name:name}});
const findLibrary=(id)=>Library.findOne({raw:true,where:{id:id}});
function showBookPage(req,res) {
   let book,library;
   findBook(req.params.name)
       .then(result=>book=result)
       .then(()=>
       findLibrary(book.library_id))
       .then(result=>library=result)
       .then(()=> res.render('book',{
          book:book,
          library:library
       }))

}
module.exports={showBookPage};