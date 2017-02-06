var express=require("express");
var route=express();

var Utilisateur=require("./utilisateur");

route.post("/",function (req,res) {
    console.log(req.param('user'))
    Utilisateur.find(function (err,docs) {
        if(err){res.status(500).send({500:'probleme...'});}
        if(!docs){res.status(400).send({404:'not found'});}
        res.status(200).send(docs);
    });
});

route.get("/add",function (req,res) {
    var item={
        login   : 'L2',
        pass    : 'P2',
        statut  : 'A'
    }
    var userData=Utilisateur(item);
    userData.save(function (err) {
        if (err)  throw  err;
        res.json(item);
    });
});

route.get("/user/:id",function (req,res) {
    var id = "586fbfb46be7c400508e9217";
    Utilisateur.find({login:'L1'},function (err,user) {
        if(err) throw err;
        console.log(user);
        res.json(user);
    });

   /* Utilisateur.findOne({_id:id},function (err,user) {
        if(err) throw err;
        console.log(user);
        res.json(user);
    });
    */

});

module.exports=route;