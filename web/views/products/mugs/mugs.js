'use strict';

angular.module('app.mugs', ['ngRoute'])

.controller('MugsCtrl', ['$scope', '$http', '$rootScope', 'CaseService',
    function ($scope, $http, $rootScope, CaseService) {
        //$scope.mainFilters = ["iPhone", "iPad", "Samsung", "Sony", "HTC", "Lenovo", "LG", "Nokia"];


        //CaseService.query(function (data) {
        //    $scope.productList = data.products;
        //});


    }]);