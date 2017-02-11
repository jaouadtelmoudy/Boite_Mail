'use strict';
function ReceptionFactoryFct($http,$q) {
    var service = {};
    service.getListe = function (user,pass) {
        return $http({
            method: 'POST',
            url: 'http://localhost:3000/login',
            params:{user:user,pass:pass}
        }).then(function successCallback(succes) {
            return succes;
        }, function errorCallback(err) {
            return err;
        });
    }


    return service;
}
ReceptionFactoryFct.$inject=['$http','$q'];
angular.module('boiteMail').factory('ReceptionFactory',ReceptionFactoryFct );