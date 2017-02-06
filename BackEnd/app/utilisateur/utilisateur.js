var mongoose = require('mongoose');

var userSchema=new mongoose.Schema({
    login   : {type:String,unique:true},
    pass    : {type:String},
    statut  : {type:String}
});

module.exports = mongoose.model('UtilisateurData', userSchema);;