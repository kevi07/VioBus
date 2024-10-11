const express = require('express');
const path = require('path');
// const Driver = require('./models/driver');
const authRoutes = require('./router/authRoutes');
const mongoose = require('mongoose');
const app = express();

app.set('view engine','ejs');
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(express.json());


const dbURI = 'mongodb+srv://Kevin:Kevin123@cluster0.oowok.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI,{useNewUrlParser : true , useUnifiedTopology:true})
.then((result)=>{
    console.log("connected to database");
})
.catch((err)=>{
    console.log("Database connection error",err);
})

app.get('/',(req,res)=> {
    res.render('index');
})
 

app.use(authRoutes);
app.listen(5000);