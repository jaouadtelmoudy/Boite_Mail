'use strict';
require("./accueil.service");
require('./style.css');
function AccControllerFct(AccFactory,$scope,$localStorage){
    $scope.deconnexion=function () {
        $localStorage.$reset()
    }
    $scope.connexion=function(){
        
    }
}
AccControllerFct.$inject=['AccFactory','$scope','$localStorage'];
angular.module('boiteMail').controller('AccController',AccControllerFct);
