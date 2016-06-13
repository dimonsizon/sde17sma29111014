'use strict';

angular.module('app.photostone', ['ngRoute'])

.controller('PhotostoneCtrl', ['$scope', '$http', '$rootScope', 'PhotostoneService',
    function ($scope, $http, $rootScope, PhotostoneService) {
        $scope.mainFilters = ["Фотокамень"];
        
        PhotostoneService.query(function (data) {
            $scope.productList = data.products;
        });


    }]);