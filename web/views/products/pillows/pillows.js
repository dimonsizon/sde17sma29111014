'use strict';

angular.module('app.pillows', ['ngRoute'])

.controller('PillowsCtrl', ['$scope', '$http', '$rootScope', 'PillowService',
    function ($scope, $http, $rootScope, PillowService) {
        $scope.mainFilters = ["Подушка квадратная", "Подушка сердце"];

        PillowService.query(function (data) {
            $scope.productList = data.products;
        });


    }]);