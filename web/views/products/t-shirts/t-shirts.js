'use strict';

angular.module('app.tshirts', ['ngRoute'])

.controller('TshirtsCtrl', ['$scope', '$http', '$rootScope', 'TShirtService',
    function ($scope, $http, $rootScope, TShirtService) {
        $scope.mainFilters = ["Футболка"];

        TShirtService.query(function (data) {
            $scope.productList = data.products;
        });


    }]);