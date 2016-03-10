'use strict';

angular.module('app.home', ['ngRoute'])

.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: '/views/home/home.html',
            controller: 'HomeCtrl'            
        })
        /*.state('state1.list', {
            url: "/list",
            templateUrl: "/views/home/home.html",
            
        })*/
    ;
}])

.controller('HomeCtrl', ['$scope', '$http', '$rootScope', 'appConfig',
    function ($scope, $http, $rootScope, appConfig) {
        $scope.test = 'Test )))';
    }]);