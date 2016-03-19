'use strict';

angular.module('app', [
    'ngRoute',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap.tpls',
    'ui.bootstrap.carousel',
    'ui.bootstrap.tooltip',
    'ui.bootstrap.popover',
    'ui.bootstrap.datepicker',
    'ui.bootstrap.modal',
    'ui.bootstrap.buttons',
    'ui.bootstrap.dropdown',  
    'angulartics',
    'angulartics.google.analytics',
    'app.route',
    'app.services',
    'app.home',
    'app.case'
]).config([
    '$stateProvider', '$urlRouterProvider', '$httpProvider',
    function ($stateProvider, $urlRouterProvider, $httpProvider) {
        //$httpProvider.defaults.withCredentials = true;
        $urlRouterProvider.otherwise("/home");

        /*$locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });*/        
    }
]).value("appConfig", {
    clientUrl: ''
}).run(['$rootScope', '$http', '$state', 'appConfig', '$location', '$sce', '$timeout', '$routeParams', '$window', '$filter',
    function ($rootScope, $http, $state, appConfig, $location, $sce, $timeout, $routeParams, $window, $filter) {
        
        $rootScope.encodeURIComponent = encodeURIComponent;

        $rootScope.locationBack = function () {
            window.history.back();
        }

        $rootScope.isState = function(state) {
            return $state.is(state);
        }

        //$rootScope.setActive = function (localPath) {
        //    return $location.path() === localPath;
        //}

        $rootScope.$on('$routeChangeStart', function (e, current, pre) {
            
        });

        $rootScope.$on('$routeChangeSuccess', function (e, current, pre) {

        });

    }])
    .filter('replace', function () {
        return function (value, find, replace) {
            if (!value) return '';
            return value.replace(new RegExp(find, 'g'), replace);
        }
    })	
    .filter('limitText', function () {
        return function (value, limit) {
            if (!value) return '';
            if (!limit) return value;
            if (value.length <= limit) {
                return value;
            } else {
                value = value.substr(0, limit) + '...';
            }
            return value;
        }
    })
;