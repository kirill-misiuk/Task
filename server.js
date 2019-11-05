const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
app.use('view engine','ejs');
try {
app.listen(PORT,()=>{
    console.log('server has been started')
})
}catch (e) {
    console.log(e)
}

