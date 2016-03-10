'use strict';

angular.module('app.home', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: '/views/home/home.html',
        controller: 'HomeCtrl',
        reloadOnSearch: false,
        access: {
            isFree: false
        }
    });
}])

.controller('HomeCtrl', ['$scope', '$http', '$rootScope', 'appConfig',
    function ($scope, $http, $rootScope, appConfig) {
        $scope.test = 'Test )))';
    }]);