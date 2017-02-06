 window.jQuery = window.$ =require("./node_modules/jquery/dist/jquery");
require('./node_modules/bootstrap/dist/js/bootstrap.js')
//require("./node_modules/bootstrap/dist/css/bootstrap.css");
//require('./app/css/style.css');
var angular=require("./node_modules/angular");
var angularui=require("./node_modules/angular-ui-router/release/angular-ui-router");
var myApp=angular.module("boiteMail",[angularui]);

myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'app/login/login.html',
            controller:'LoginController',
           // controllerAs:'LogCtrl'
        })
         ;


});

 myApp.controller("AccCtrl",function ($scope) {
     //alert("AAA");
 })
require("./app/login/login.controller");

 console.log("je suis la !!");