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
        when('/:serviceType/:serviceId/order/:gasId', {
            templateUrl: '/views/order.html',
            controller: 'orderCtrl'
        }).
        when('/case', {
            templateUrl: '/views/services/case.html',
            controller: 'CaseListCtrl'
        }).
        when('/case/:serviceId/:gasId', {
            templateUrl: '/views/services/service-details.html',
            controller: 'serviceDetailsCtrl'
        }).
        when('/utensils', {
            templateUrl: '/views/services/utensils.html',
            controller: 'UtensilsListCtrl'
        }).
        when('/utensils/:serviceId/:gasId', {
            templateUrl: '/views/services/service-details.html',
            controller: 'serviceDetailsCtrl'
        }).
        when('/clothing', {
            templateUrl: '/views/services/clothing.html',
            controller: 'СlothingListCtrl'
        }).
        when('/clothing/:serviceId/:gasId', {
            templateUrl: '/views/services/service-details.html',
            controller: 'serviceDetailsCtrl'
        }).
        when('/tile', {
            templateUrl: '/views/services/tile.html',
            controller: 'TileListCtrl'
        }).
        when('/tile/:serviceId/:gasId', {
            templateUrl: '/views/services/service-details.html',
            controller: 'serviceDetailsCtrl'
        }).
        when('/puzzles', {
            templateUrl: '/views/services/puzzles.html',
            controller: 'PuzzleListCtrl'
        }).
        when('/puzzles/:serviceId/:gasId', {
            templateUrl: '/views/services/service-details.html',
            controller: 'serviceDetailsCtrl'
        }).
        otherwise({
            redirectTo: '/home'
        });
    }])
    .run(['$rootScope',
        function ($rootScope) {
            //$rootScope.saveGasId = function (gasId) {
            //    $rootScope.gasId = gasId;
            //}
                        
            $rootScope.currentService = function(location) {
                switch (location) {
                    case 'clothing':
                        location = 'СlothingDetailsServices';
                        break;
                    case 'case':
                        location = 'CaseDetailsServices';
                        break;
                    case 'utensils':
                        location = 'UtensilsDetailsServices';
                        break;
                    case 'tile':
                        location = 'TileDetailsServices';
                        break;
                    case 'puzzles':
                        location = 'PuzzlesDetailsServices';
                        break;
                }
                return location;
            }

            $rootScope.goTo = function (newState) {
                currentState = newState;
            }
            $rootScope.isOnState = function (state) {
                return currentState == state;
            }
        }
    ]);

