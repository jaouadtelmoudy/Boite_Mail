var express=require("express");
var route=express();

route.get("/",function (req,res) {
    res.json({nom:'Jaouad'});
});

module.exports=route;