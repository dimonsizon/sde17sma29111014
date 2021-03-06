﻿'use strict';

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
    //'angulartics',
    //'angulartics.google.analytics',
    'angularFileUpload',
    'app.route',
    'app.services',
    'app.directives',
    'app.home',
    'app.case',
    'app.keychain',
    'app.clock',
    'app.mugs',
    'app.tshirts',
    'app.pillows',
    'app.puzzles',
    'app.photostone',
    'app.photokristall',
    'app.photoframe',

    'app.productDetails',
    'app.reviews',
    'app.news',
    'app.contacts',
    'app.cart',
    'app.editor',
    'ngCart',
    'toastr'
]).config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
        //$httpProvider.defaults.withCredentials = true;
        $urlRouterProvider.otherwise("/home");

        //$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        $locationProvider.html5Mode(true);

        /*$locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });*/        
    }
]).config(function (toastrConfig) {
    angular.extend(toastrConfig, {
        autoDismiss: false,
        containerId: 'toast-container',
        maxOpened: 0,
        newestOnTop: true,
        positionClass: 'toast-center-center',
        preventDuplicates: false,
        preventOpenDuplicates: false,
        timeOut: 3500,
        target: 'body'
    });
}).value("appConfig", {
    clientUrl: ''
}).run(['$rootScope', '$http', '$state', 'appConfig', '$location', '$sce', '$timeout', '$interval', '$routeParams', '$window', '$filter',
    function ($rootScope, $http, $state, appConfig, $location, $sce, $timeout, $interval, $routeParams, $window, $filter) {
        $rootScope.productMainFilter = '';
        $rootScope.productFilter = '';
        $rootScope.encodeURIComponent = encodeURIComponent;

        $rootScope.locationBack = function () {
            window.history.back();
        }

        $rootScope.isState = function(state) {
            return $state.is(state);
        }

        $rootScope.goState = function (state) {
            $state.go(state);
        }

        $rootScope.filterByProduct = function (productName, mainFilter) {
            if (mainFilter) {
                $rootScope.productMainFilter = productName;
                $rootScope.productFilter = ''; //reset productFilter
            } else {
                $rootScope.productFilter = productName;
            }            
        }

        /************************************/
        $rootScope.initId = '_' + Math.round(Math.random() * 9999999999);
        $interval(function () {
            $rootScope.initId = '_' + Math.round(Math.random() * 9999999999)
        }, 5000); //для дополнения к id при добавлении в корзину
        /*****************Old logic from old site*********************/

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