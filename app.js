const express = require('express');
const path = require('path');
const app = express();

app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

app.get('/',(req,res)=> {
    res.render('index');
})
 
app.get('/login',(req,res) => {
    res.render('login')
})
app.listen(5000);