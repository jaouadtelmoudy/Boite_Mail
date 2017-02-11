'use strict';
require("./envoi.service");
require('./style.css');
function BoiteEnvControllerFct(BoiteEnvoiFactory,$scope){
    $scope.connexion=function(){
        LoginFactory.getListe($scope.user,$scope.pass).then(function(res){
            console.log(res.data.length);
            if(res.data.length>0){
                //state.go()==> Accuel
            }
        },function (err) {
            console.log(err);
        });
    }
}
BoiteEnvControllerFct.$inject=['EnvoiFactory','$scope'];
angular.module('boiteMail').controller('BoiteEnvoiController',BoiteEnvControllerFct);
