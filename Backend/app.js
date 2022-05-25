const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
require('dotenv').config()
const app = express();
const User = require('./models/user')
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
});
app.get("/Login", function (req, res) {
    res.sendFile(__dirname + "/Login.html")
});
app.get("/Register", function (req, res) {
    res.sendFile(__dirname + "/Register.html")
});
const mongoose = require('mongoose')
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
        const token = await user.generateAuthTokens();
        //await user.save()
        res.send({ user, token })
    }
    catch (e) {
        res.status(400).send()
    }
});
app.listen(3000, function (req, res) {
    console.log("Running on 3000");
});
