'use strict';

angular.module('app.productDetails', ['ngRoute'])

.controller('ProductDetailsCtrl', ['$scope', '$http', '$rootScope',
    function ($scope, $http, $rootScope) {
        $scope.test = 'Details';
    }]);