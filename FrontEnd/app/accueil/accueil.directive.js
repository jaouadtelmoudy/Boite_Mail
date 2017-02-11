'use strict';
function menuFct(){
    return {
        restrict: 'E',
        templateUrl: 'app/accueil/liste.html'
    };
}
angular.module('boiteMail').directive('accueilDirective', menuFct);