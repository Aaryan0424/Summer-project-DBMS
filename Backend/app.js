const express = require("express");
const bodyParser=require("body-parser");
const mongo = require('mongodb');
const app=express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
});
app.get("/Login",function(req,res){
    res.sendFile(__dirname+"/Login.html")
});
app.get("/Register",function(req,res){
    res.sendFile(__dirname+"/Register.html")
});

app.post("/register",function(req,res){
    console.log(req.body);
    var emailID=req.body.email;
    var password=req.body.password;
    var name=req.body.name;
    var age=req.body.age;
    var number=req.body.number;
    const { MongoClient, ServerApiVersion } = require('mongodb');
    var uri= "mongodb+srv://User:35WTQ4FNBilOpBcO@cluster0.hago4.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    client.connect(err => {
    const collection = client.db("Cluster0").collection("Details");
        collection.findOne({"email":emailID},function(err,result){
            if (err) throw err;
            if(result==null){
                collection.insertOne({
                                "name":name,
                                "email":emailID,
                                "password":password,
                                "age":age,
                                "number":number
                            },function(err,result){
                                if (err) throw err;
                            });
                            res.send("Registered Succesfully!");
            }
            else{
                res.send(emailID+" is already in use!");
            }
                        
        });
    //client.close();
    });
});
app.post("/login",function(req,res){
    console.log(req.body);
    const emailID=req.body.email;
    const password=req.body.password;
    const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri = "mongodb+srv://User:35WTQ4FNBilOpBcO@cluster0.hago4.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    client.connect(err => {
        const collection = client.db("Cluster0").collection("Details");
        //console.log(emailID);
        collection.findOne({"email":emailID},function(err,result){
            if (err) throw err;
            //console.log(result.password);
            // console.log(result);
            // console.log(password);
            if(result==null){
                res.send("Invalid Username or Password!");
            }
            else if(result.password==password){
               
                res.send("Logged In succesfully. Hello "+result.name);
            }
            else {
                res.send("Invalid Password or Username");
            }
            //console.log(result);
        });
    //client.close();
    });

});

app.listen(3000,function(req,res){
    console.log("Running on 3000");
});