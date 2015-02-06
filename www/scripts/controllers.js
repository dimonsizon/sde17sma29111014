'use strict';

var appController = angular.module('appController', []);

appController.controller('appCtrl', function ($scope, $routeParams, $location) {
    var currentState = $location.path().split('/')[1];
    if ($location.path()=='') {
        currentState = 'home';
    }
    $scope.goTo = function (newState) {
        currentState = newState;
    }
    $scope.isOnState = function (state) {
        return currentState == state;
    }
});

appController.controller('serviceCtrl', ['$scope', '$routeParams', 'Services',
    function ($scope, $routeParams, Services) {
        var currentState = 'services.all';
        //$http.get('/views/services/json/services.json').success(function (data) {
        $scope.services = Services.query();
        //});
        $scope.goTo = function (newState) {
            currentState = newState;
        }
        $scope.isOnState = function (state) {
            return currentState == state;
        }

        $scope.filterDevice = function (device) {
            $scope.device = device;
        }
}]);

appController.controller('serviceDetailsCtrl', ['$scope', '$routeParams', '$location', 'CaseServices', 'UtensilsServices', 'СlothingServices', 'TileServices', 'PuzzlesServices',
    function ($scope, $routeParams, $location, CaseServices, UtensilsServices, СlothingServices, TileServices, PuzzlesServices) {
        var currentState;
        var imgMassiv;
        var location = $location.path().split('/')[1];
        var currentService = currentService(location); //location.charAt(0).toUpperCase() + location.slice(1) + 'Services';
        currentService = eval('(' + currentService + ')');

        $scope.url = $location.path().split('/')[1];
        

        $scope.service = currentService.get({ serviceId: $routeParams.serviceId }, function (service) {
            //$scope.mainImgUrl = service.images[0];
            imgMassiv = service.images;
        });

        $scope.goTo = function (newState) {
            currentState = newState;
        }
        $scope.isOnState = function (state) {
            return currentState == state;
        }
        $scope.getImage = function (url) {
            $scope.imageUrl = url;
        }
        $scope.nextImage = function (url) {
            var nextImgIndex = imgMassiv.indexOf(url) + 1;
            if (nextImgIndex == imgMassiv.length) { //если индекс последний
                nextImgIndex = 0; //начинаем с начала
            }
            var nextImg = imgMassiv[nextImgIndex];            
            $scope.imageUrl = nextImg;
        }
        $scope.prevImage = function (url) {
            var prevImgIndex = imgMassiv.indexOf(url) - 1;
            if (prevImgIndex == -1) { //если индекс 0
                prevImgIndex = imgMassiv.length-1; //начинаем с конца
            }
            var prevImg = imgMassiv[prevImgIndex];
            $scope.imageUrl = prevImg;
        }

        function currentService(location) {
            switch (location) {
                case 'clothing':
                    location = 'СlothingServices';
                    break;
                case 'case':
                    location = 'CaseServices';
                    break;
                case 'utensils':
                    location = 'UtensilsServices';
                    break;
                case 'tile':
                    location = 'TileServices';
                    break;
                case 'puzzles':
                    location = 'PuzzlesServices';
                    break;
            }
            return location;
        }
    }]);

appController.controller('orderCtrl', ['$scope', '$routeParams', '$location',
    function ($scope, $routeParams, $location) {

    }]);