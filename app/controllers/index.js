function showMainPage(req,res) {
    res.render('index',{
        user:req.user
    })
}
module.exports={showMainPage};