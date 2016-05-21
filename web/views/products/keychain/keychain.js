'use strict';

angular.module('app.keychain', ['ngRoute'])

.controller('KeychainCtrl', ['$scope', '$http', '$rootScope', 'CaseService',
    function ($scope, $http, $rootScope, CaseService) {
        $scope.text = 'Work))))';
        //$scope.productList = [];
        //$scope.productsLoading = true;
        //$scope.mainFilters = ["iPhone", "iPad", "Samsung", "Sony", "HTC", "Lenovo", "LG", "Nokia"];
        //$scope.showAllMainFilters = true;

        //CaseService.query(function (data) {
        //    //for (var i = 0; i < data.cases.length; i++) {
        //    //    $scope.filtersList.push(data.cases[i].name);
        //    //}
        //    $scope.productList = data.products;
        //    $scope.productsLoading = false;
        //});

        //$scope.showAllFilters = function (value) {
        //    $scope.showAllMainFilters = value;
        //}
    }]);