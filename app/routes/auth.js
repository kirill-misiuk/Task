const { showLoginPage, showSignupPage, processLogin,addLocation} = require('../controllers/auth');

module.exports = function (app, passport) {

    app.get('/signin', showLoginPage);
    app.post('/signin', passport.authenticate('local-login', {
            successRedirect: '/',
            failureRedirect: '/signin',
            failureFlash: true
        }),
        processLogin);
    app.get('/signup', showSignupPage);
    app.post('/signup',passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/signup',
        failureFlash: true
    }));

    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    })


};