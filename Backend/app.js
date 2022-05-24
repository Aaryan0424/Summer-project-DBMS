const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const mongo = require('mongodb');
const bcrypt = require('bcryptjs');
require('dotenv').config()
const JWT_SECRET = process.env.JWT_SECRET
// console.log(JWT_SECRET)
const jwt = require('jsonwebtoken')
const app = express();

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
app.post("/register", function (req, res) {
    //console.log(req.body);
    var emailID = req.body.email;
    var password = req.body.password;
    var name = req.body.name;
    var age = req.body.age;
    var number = req.body.number;
    const { MongoClient, ServerApiVersion } = require('mongodb');
    var uri = process.env.DB_URL
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    client.connect(err => {
        const collection = client.db("Cluster0").collection("Details");
        collection.findOne({ "email": emailID }, async function (err, result) {
            if (err) throw err;
            if (result == null) {
                const hasingpassword = await bcrypt.hash(password, 10);
                collection.insertOne({
                    "name": name,
                    "email": emailID,
                    "password": hasingpassword,
                    "age": age,
                    "number": number
                }, function (err, result) {
                    if (err) throw err;
                }); const data = {
                    members: [
                        {
                            email_address: emailID,
                            status: "subscribed",
                            merge_fields: {
                                FNAME: name,
                            }
                        }
                    ]
                }
                const options = {
                    method: "POST",
                    auth: "Summer:97597cfe2f2fa651de623ec6431fb1c8-us11"
                }
                const jsonData = JSON.stringify(data);
                const url = process.env.MAIL_URL
                const request = https.request(url, options, function (response) {
                    response.on("data", function (data) {
                        console.log(JSON.parse(data));
                    })
                })
                request.write(jsonData);
                request.end()
                if (res.statusCode == 200) {
                    res.send("Registered Succesfully!");
                }
                else {
                    res.send("Error, Try again Later");
                }


            }
            else {
                res.send(emailID + " is already in use!");
            }

        });
        //client.close();
    });
});
app.post("/login", function (req, res) {
    console.log(req.body);
    const emailID = req.body.email;
    const password = req.body.password;
    //const user = await collection.findOne({ username }).lean()
    const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri = process.env.DB_URL
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    client.connect(err => {
        const collection = client.db("Cluster0").collection("Details");
        //console.log(emailID);
        collection.findOne({ "email": emailID }, async function (err, result) {
            if (err) throw err;
            //console.log(result.password);
            // console.log(result);
            // console.log(password);
            if (result == null) {
                res.send("Invalid Username or Password!");
            }
            else if (await bcrypt.compare(password, result.password)) {
                const token = jwt.sign(
                    {
                        id: result._id,
                        username: result.email
                    },
                    JWT_SECRET
                )

                res.send("Logged In succesfully. Hello " + result.name);
            }
            else {
                res.send("Invalid Password or Username");
            }
            //console.log(result);
        });
        //client.close();
    });

});

app.listen(3000, function (req, res) {
    console.log("Running on 3000");
});
