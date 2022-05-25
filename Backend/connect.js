const express = require("express");
const bodyParser=require("body-parser");
const mongo = require('mongodb');
const app=express();
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3000,function(req,res){
    console.log("Working on 3000");
});
app.get("/",function(req,res){
    
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://User:35WTQ4FNBilOpBcO@cluster0.hago4.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

 client.connect(err => {
    const collection = client.db("User").collection("Details");
    console.log("Connected to Mongo");
    res.send("Hello\n");
    // perform actions on the collection object
   // client.close();
  });
})
