'use strict';

angular.module('app.photoframe', ['ngRoute'])

.controller('PhotoframeCtrl', ['$scope', '$http', '$rootScope', 'PhotoframeService',
    function ($scope, $http, $rootScope, PhotoframeService) {
        $scope.mainFilters = ["Фоторамка"];
        
        PhotoframeService.query(function (data) {
            $scope.productList = data.products;
        });


    }]);