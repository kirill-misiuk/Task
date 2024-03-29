function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return res.redirect('/libooklist');
    next();
}

function showLoginPage(req, res) {
    res.render('auth/signin.ejs', {message: req.flash('loginMessage')});
}

function showSignupPage(req, res) {
    res.render('auth/signup.ejs', {message: req.flash('signupMessage')});
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
    isLoggedIn,
};
