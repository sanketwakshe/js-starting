//authentication => sign up login process and identifay who some one

//authorization => if you have login then which part are you acess

//npm pacages
//npm i passport
//npm i passport local
// npm i passport-local-mongoose


//=======================================================================
//model madhe ek schema define kela tyach format

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');

// const User = new Schema({
    // email:{
    //     type:String,                     //gose to passport-local mongoose
    //     require:true
    // }
//});

// User.plugin(passportLocalMongoose);

// module.exports = mongoose.model('User', User);


//require
// passport
// local-passport
// local-passport
// User.js

//app.use

// requires the model with Passport-Local Mongoose plugged in
const User = require('./models/user');

// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//session manage
//*********npm install express-session */

// Session configuration
const session = require("express-session"); 

const sessionOptions = {
    secret: 'sanketwakshe',  // Replace with your secret key
    resave: false,
    saveUninitialized: true,
    cookie: cookie:{
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      },    // they are user log in 7 day 
};



app.use(session(sessionOptions));
app.use(flash());

// Passport configuration
app.use(passport.initialize());
app.use(passport.session());

//*************demo  */

app.get("/demouser", async (req, res) => {
    let fakeUser = new User({
        email: "sanket@gmail.com",
        username: "sanket"    // user are not define in model but  user also write because passport-local-mongoose include username 
    });
    let registerUser = await User.register(fakeUser, "123");
    res.send(registerUser);
});//demo they not use

//***************************************************** */
//signup/login routes

//folder
//routes
//user.js
//in app.js
const userRouter = require("./routes/user.js");


app.use("/",userRouter);

//in user.js//=======basic setup

const express = require("express");
const router = express.Router();


router.get("/signup", (req, res) => {
    res.send("form");
  });
