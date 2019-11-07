const {Library} = require('../../config/sequelize');
function showLoginPage(req, res) {
    const fom = "Signin";
    const  post = "signin";
    res.render('signin.ejs', {message: req.flash('loginMessage'), fom: fom, post: post});
}

function showSignupPage(req, res) {
    const  fom = "Signup";
    const  post = "signup";
    res.render('signup.ejs', {message: req.flash('signupMessage'), fom: fom, post: post});
}
function addLocation(req,res) {
    Library.create({
        location:'Minsk'
    })
}
function processLogin(req, res) {
    if (req.body.remember) {
        req.session.cookie.maxAge = 1000 * 60 * 3;
    } else {
        req.session.cookie.expires = false;
    }
    res.redirect('/');
}

module.exports = {
    showLoginPage,
    showSignupPage,
    processLogin,
    addLocation
};
