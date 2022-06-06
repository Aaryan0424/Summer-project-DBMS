const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
require('dotenv').config()
const app = express();
const User = require('./models/user')
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const MongoStore=require("connect-mongo");
const oneDay = 1000 * 60 * 60 * 24;
const cors = require("cors")
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors())
app.use(cookieParser());
app.use(sessions({
    secret: process.env.SESSION_SECRET,
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false,
    store:MongoStore.create({
        mongoUrl:process.env.DB_URL,
        ttl: 14 * 24 * 60 * 60,
        autoRemove: 'native' 
    })
}));
app.get("/", function (req, res) {
    let ses=req.session
    //console.log(ses);
    if(ses.userid!=null){
        return res.redirect('/user');
    }
    res.sendFile(__dirname + "/index.html")
});
app.get("/Login", function (req, res) {
    res.sendFile(__dirname + "/Login.html")
});
app.get("/Register", function (req, res) {
    res.sendFile(__dirname + "/Register.html")
});
const mongoose = require('mongoose');
const { NULL } = require("mysql/lib/protocol/constants/types");
mongoose.connect(process.env.DB_URL, {

    useUnifiedTopology: true,
    useNewUrlParser: true,
})
app.post("/register", async function (req, res) {
   // console.log(req.body)
    const user = new User(req.body)
    try {

        await user.save()
        const token = await user.generateAuthTokens();
        const data = {
            members: [
                {
                    email_address: req.body.email,
                    status: "subscribed",
                    merge_fields: {
                        FNAME: req.body.name,
                    }
                }
            ]
        }
        const options = {
            method: "POST",
            auth: process.env.auth_email,
            // update_existing: true
        }
        const jsonData = JSON.stringify(data);
        const url = process.env.MAIL_URL
        const request = https.request(url, options, function (response) {
            response.on("data", function (data) {
                //console.log(JSON.parse(data));
            })
        })
        request.write(jsonData);
        request.end()
        //console.log(token)
        res.status(201).send({ user, token, "message": "Hello " + req.body.name })
    } catch (e) {
        //console.log("Heelo");
        res.status(400).send(e)
    }
});
app.post("/login", async function (req, res) {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        console.log(user);
        const token = await user.generateAuthTokens();
        var session;
        session=req.session;
        session.userid=req.body.email;
        console.log(req.session)
        req.session.save();
        res.json({
            userInfo: 
            {
                name : user.name ,
                email : user.email,
                token : token
            }
        })
        await user.save()
    }
    catch (e) {
        res.status(400).send()
    }
});
app.get("/logout",function(req,res){
    // res.send("User has been logged out");
    console.log("Session destroyed and logged out successfully.");
    req.session.destroy();
    res.redirect('http://localhost:3000/');
});
app.listen(5000, function (req, res) {
    console.log("Running on 5000 port");
});
