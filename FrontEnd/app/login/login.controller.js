'use strict';
require("./login.services");
function LoginControllerFct(LoginFactory,$scope,$state,$localStorage){
    //$localStorage.message = "Hello World";
    //console.log($localStorage.login);
    if($localStorage.login!='' && $localStorage.login!=undefined){
       $state.go("accueil");
    }

    $scope.connexion=function(){
        LoginFactory.getListe($scope.user,$scope.pass).then(function(res){
            console.log(res.data.length);
            if(res.data.length>0){
                //state.go()==> Accuel
               // $localStorage.login = $scope.user;
                $localStorage.login = "";
                $state.go("accueil");
            }
        },function (err) {
            console.log(err);
        });
    }

}
LoginControllerFct.$inject=['LoginFactory','$scope','$state','$localStorage'];
angular.module('boiteMail').controller('LoginController',LoginControllerFct);
