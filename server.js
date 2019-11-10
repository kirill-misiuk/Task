const express = require("express");
const PORT = process.env.PORT || 8000;
const app = express();
const bodyParser = require('body-parser');
const cookieParser= require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const createError = require('http-errors');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('./css'));
app.set('view engine','ejs');
app.use(session({
    secret: 'hellogordanthisiskarl',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./app/routes/index.js')(app);
require('./app/routes/main')(app);
require('./js/passport')(passport);
require('./app/routes/addbook.js')(app,passport);
require('./app/routes/libraries')(app);
require('./app/routes/auth.js')(app, passport);
require('./app/routes/book')(app);
require('./app/routes/lib_booklist')(app,passport);
try {
app.listen(PORT,()=>{
    console.log('server has been started')
})
}catch (err) {
    console.log(err)
}
app.use(function(req, res, next) {
    next(createError(404));
});
app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});


