 window.jQuery = window.$ =require("./node_modules/jquery/dist/jquery");
require('./node_modules/bootstrap/dist/js/bootstrap.js')
var angular=require("./node_modules/angular");
var angularui=require("./node_modules/angular-ui-router/release/angular-ui-router");
 var ngStorage=require("./node_modules/ngstorage/ngStorage.min");
var myApp=angular.module("boiteMail",[angularui,'ngStorage']);

myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'app/login/login.html',
            controller:'LoginController',
        })
        .state('accueil', {
            url: '/accueil',
            templateUrl: 'app/accueil/liste.html',
            controller:'AccController',
        })
        .state('boiteEnv', {
            url: '/boiteEnv',
            templateUrl: 'app/boiteEnvoi/liste.html',
            controller:'BoiteEnvoiController'
        })
        .state('reception', {
            url: '/reception',
            templateUrl: 'app/boiteReception/liste.html',
            controller:'ReceptionController'
    });


});


require("./app/login/login.controller");
require("./app/accueil/accueil.controller");
 require("./app/boiteReception/receprion.controller");
 require("./app/accueil/accueil.directive");
require("./app/boiteEnvoi/envoi.controller");


