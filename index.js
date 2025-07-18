const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.render('home.ejs')
})

app.get('/about',(req,res)=>{
        res.render('about.ejs')
})

app.get('/contact',(req,res)=>{
    res.render('contact.ejs')
})

app.set('view engine', 'ejs');




const PORT=5000
const HOST='127.0.0.1'

app.listen(PORT,()=>{
    console.log(`Server is running on port http://${HOST}:${PORT}`)
})