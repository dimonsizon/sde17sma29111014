'use strict';

//var appController = angular.module('appController', []);

appController.controller('cartCtrl', function ($scope, $routeParams, $location) {
    $scope.aaa = 'test';
    $scope.goTo = function (newState) {
        currentState = newState;
    }
    $scope.isOnState = function (state) {
        return currentState == state;
    }
});