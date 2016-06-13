'use strict';

angular.module('app.clock', ['ngRoute'])

.controller('ClockCtrl', ['$scope', '$http', '$rootScope', 'ClockService',
    function ($scope, $http, $rootScope, ClockService) {
        $scope.mainFilters = ["Стеклянные", "Деревянные"];
        //$scope.productMainFilter = '';

        ClockService.query(function (data) {
            $scope.productList = data.products;
        });


    }]);