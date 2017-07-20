var myApp = angular.module('myApp', ['ngRoute', 'swapi']);

myApp.controller('FilmCtrl', ['$scope', 'SwapiService',
    function ($scope, SwapiService) {
        SwapiService.films()
        .then(function(data) {
            $scope.data = data.data.results;
        })

        $scope.detail = function() {
            film = {title :"", characters : "", planets : "", vehicles : "", opening_crawl : "", starships : "", species : ""}
        }
    }
]);
