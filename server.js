const express=require('express')
const app=express()
const PORT=process.env.PORT || 3300
const ejs=require('ejs')
const expressLayout=require('express-ejs-layouts')
const path=require('path')

app.use(express.static('public'))

app.use(expressLayout)
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')

app.get('/', function(req,res){
    res.render("home")
})

app.get('/login', function(req,res){
    res.render("auth/login")
})

app.get('/register', function(req,res){
    res.render("auth/register")
})


app.get('/cart',(req,res)=>{
    res.render('customer/cart')
})

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})