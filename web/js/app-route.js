'use strict';

angular.module('app.route', ['ngRoute'])

.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: '/views/home/home.html',
            controller: 'HomeCtrl'
        })
        .state('case', {
            url: "/case",
            templateUrl: "/views/products/case/case.html",
            controller: 'CaseCtrl'
        })
    ;
}]);