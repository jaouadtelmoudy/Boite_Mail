var express=require("express");
var app=express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/boitemail');
var user=require("./app/utilisateur/route");
var envoi=require("./app/envoi/route");
var reception=require("./app/reception/route");
var bodyParser = require('body-parser')


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var jsonParser = bodyParser.json()


var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use("/login",user);
app.use("/login/add",user);
app.use("/login/user/:id",user);
app.use("/envoi",envoi);
app.use("/reception",reception);



app.listen(3000, function () {
    console.log('Le serveur est demaré sur le port 3000 !');
});