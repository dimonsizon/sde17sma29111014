'use strict';

/* App Module */

angular.module('app', [
  'ngRoute',
  'appController',
  'appServices',
  'appFilters',
]).
config(['$routeProvider',
    function ($routeProvider) {
    $routeProvider.
        when('/home', {
            templateUrl: '/views/home.html',
            controller: 'appCtrl'
        }).        
        when('/articles', {
            templateUrl: '/views/articles.html',
            controller: 'appCtrl'
        }).
        when('/contacts', {
            templateUrl: '/views/contacts.html',
            controller: 'appCtrl'
        }).
        when('/faq', {
            templateUrl: '/views/faq.html',
            controller: 'appCtrl'
        }).
        when('/news', {
            templateUrl: '/views/news.html',
            controller: 'appCtrl'
        }).
        when('/:serviceType/:serviceId/order', {
            templateUrl: '/views/order.html',
            controller: 'orderCtrl'
        }).
        when('/case', {
            templateUrl: '/views/services/case.html',
            controller: 'serviceCtrl'
        }).
        when('/case/:serviceId', {
            templateUrl: '/views/services/service-details.html',
            controller: 'serviceDetailsCtrl'
        }).
        when('/utensils', {
            templateUrl: '/views/services/utensils.html',
            controller: 'serviceCtrl'
        }).
        when('/utensils/:serviceId', {
            templateUrl: '/views/services/service-details.html',
            controller: 'serviceDetailsCtrl'
        }).
        when('/clothing', {
            templateUrl: '/views/services/clothing.html',
            controller: 'serviceCtrl'
        }).
        when('/clothing/:serviceId', {
            templateUrl: '/views/services/service-details.html',
            controller: 'serviceDetailsCtrl'
        }).
        when('/tile', {
            templateUrl: '/views/services/tile.html',
            controller: 'serviceCtrl'
        }).
        when('/tile/:serviceId', {
            templateUrl: '/views/services/service-details.html',
            controller: 'serviceDetailsCtrl'
        }).
        when('/puzzles', {
            templateUrl: '/views/services/puzzles.html',
            controller: 'serviceCtrl'
        }).
        when('/puzzles/:serviceId', {
            templateUrl: '/views/services/service-details.html',
            controller: 'serviceDetailsCtrl'
        }).
        otherwise({
            redirectTo: '/home'
        });
}]);

