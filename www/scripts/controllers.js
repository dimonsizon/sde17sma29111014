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

appController.controller('serviceCtrl', ['$scope', '$rootScope', '$routeParams', 'Services',
    function ($scope, $rootScope, $routeParams, Services) {
        var currentState = 'services.all';
        //$http.get('/views/services/json/services.json').success(function (data) {
        $scope.services = Services.query();
        //});

        $scope.filterDevice = function (device) {
            $scope.device = device;
        }
}]);

appController.controller('serviceDetailsCtrl', ['$scope', '$rootScope', '$routeParams', '$location', 'CaseServices', 'UtensilsServices', 'СlothingServices', 'TileServices', 'PuzzlesServices',
    function ($scope, $rootScope, $routeParams, $location, CaseServices, UtensilsServices, СlothingServices, TileServices, PuzzlesServices) {
        var currentState;
        var imgMassiv;
        var location = $location.path().split('/')[1];
        var currentService = $rootScope.currentService(location); //location.charAt(0).toUpperCase() + location.slice(1) + 'Services';
        currentService = eval('(' + currentService + ')');

        $scope.url = $location.path().split('/')[1];

        $rootScope.saveDetails = currentService.get({ serviceId: $routeParams.serviceId }, function (service) {
            imgMassiv = service.images;
        });

        $scope.service = $rootScope.saveDetails;

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
    }]);

appController.controller('orderCtrl', ['$scope', '$rootScope', '$routeParams', '$location', 'CaseServices', 'UtensilsServices', 'СlothingServices', 'TileServices', 'PuzzlesServices',
    function ($scope, $rootScope, $routeParams, $location, CaseServices, UtensilsServices, СlothingServices, TileServices, PuzzlesServices) {
        
        if ($rootScope.saveDetails) {
            $scope.service = $rootScope.saveDetails;
        } else {
            var location = $location.path().split('/')[1];
            var currentService = $rootScope.currentService(location);
            currentService = eval('(' + currentService + ')');
            $scope.service = currentService.get({ serviceId: $routeParams.serviceId });
        }
    }]);