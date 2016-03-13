'use strict';

angular.module('app.home', ['ngRoute'])

.controller('HomeCtrl', ['$scope', '$http', '$rootScope', 'appConfig',
    function ($scope, $http, $rootScope, appConfig) {
        $scope.test = 'Test )))';
    }]);