function showMainPage(req,res) {
    res.render('main',{
        user:req.user
    })
}
module.exports={showMainPage};