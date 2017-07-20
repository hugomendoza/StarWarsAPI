var services = angular.module('swapi', []);

services.factory('SwapiService', ['$http',
    function($http) {
        function Swapi(){};

        Swapi.domain = 'http://swapi.co/api/films/';

        Swapi.films = function () {
            var url = Swapi.domain;
            return $http.get(url)
                .then(function(response){
                    return response;
                });
        };

        return Swapi;
    }
])
