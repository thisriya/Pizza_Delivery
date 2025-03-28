require('dotenv').config()
const express=require('express')
const app=express()
const PORT=process.env.PORT || 3300
const ejs=require('ejs')
const expressLayout=require('express-ejs-layouts')
const path=require('path')
const mongoose = require('mongoose');
const session=require('express-session')
const flash=require('express-flash')
const MongoDbStore=require('connect-mongo')
// const passport=require('passport')
// const MongoDbStore=require('connect-mongo')

// Connect to MongoDB
const url = 'mongodb://localhost/pizza';
mongoose.connect(url, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
})
.then(() => {
    console.log("Database Connected..");
})
.catch((err) => {
    console.log("Connection Failed:", err);
});
const connection = mongoose.connection;



//session store
let mongoStore= MongoDbStore.create({
    mongoUrl: 'mongodb://localhost/pizza',
    collectionName: 'sessions'
});


//session 
app.use(session({
    secret: process.env.COOKIE_SECRET || 'thisismysecret',
    resave: false,
    saveUninitialized: false,
    store: mongoStore,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24, // 24 hours
        httpOnly: true, // Prevents client side JS from reading the cookie
        secure: false, // Set to true if using HTTPS
        sameSite: 'strict' // CSRF protection
    }
}))

app.use(flash())

app.use((req, res, next) => {
    res.locals.session = req.session
    res.locals.user = req.session.user || null // Changed from req.user to req.session.user
    next()
})

app.use((err, req, res, next) => {
    console.error('Unhandled Error:', err)
    res.status(500).send('An unexpected error occurred')
})

// const passportInit = require('./app/config/passport')
// passportInit(passport)
// app.use(passport.initialize())
// app.use(passport.session())


app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(expressLayout)
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')

require('./routes/web')(app)



app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})