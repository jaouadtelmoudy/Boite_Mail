'use strict';
require("./login.services");
function LoginControllerFct(LoginFactory,$scope){
    $scope.connexion=function(){
        LoginFactory.getListe($scope.user,$scope.pass).then(function(res){
            console.log(res.data);
        },function (err) {
            console.log(err);
        });
    }
}
LoginControllerFct.$inject=['LoginFactory','$scope'];
angular.module('boiteMail').controller('LoginController',LoginControllerFct);
