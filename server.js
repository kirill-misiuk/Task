const express = require("express");
const PORT = process.env.PORT || 8000;
const app = express();
const bodyParser = require('body-parser');
const cookieParser= require('cookie-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('./css'));
app.set('view engine','ejs');
require('./app/routes/index.js')(app);
require('./app/routes/addbook.js')(app);

try {
app.listen(PORT,()=>{
    console.log('server has been started')
})
}catch (err) {
    console.log(err)
}

