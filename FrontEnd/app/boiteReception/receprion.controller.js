'use strict';
require("./reception.service");
require('./style.css');
function ReceptionControllerFct(ReceptionFactory,$scope){
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
ReceptionControllerFct.$inject=['ReceptionFactory','$scope'];
angular.module('boiteMail').controller('ReceptionController',ReceptionControllerFct);
