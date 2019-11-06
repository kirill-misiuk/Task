const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
const bodyParser = require('body-parser');
const cookieParser= require('cookie-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.set('view engine','ejs');

require('./app/routes/index.js')(app);
require('./config/sequelize');
try {
app.listen(PORT,()=>{
    console.log('server has been started')
})
}catch (e) {
    console.log(e)
}

