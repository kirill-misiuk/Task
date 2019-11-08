const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
const bodyParser = require('body-parser');
const cookieParser= require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');

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
require('./js/passport')(passport);
require('./app/routes/index.js')(app);
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

