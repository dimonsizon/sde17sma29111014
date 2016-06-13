'use strict';

angular.module('app.photokristall', ['ngRoute'])

.controller('PhotokristallCtrl', ['$scope', '$http', '$rootScope', 'PhotokristallService',
    function ($scope, $http, $rootScope, PhotokristallService) {
        $scope.mainFilters = ["Фотокристалл"];
        
        PhotokristallService.query(function (data) {
            $scope.productList = data.products;
        });

    }]);