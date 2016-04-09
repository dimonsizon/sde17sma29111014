'use strict';

angular.module('app.productDetails', ['ngRoute'])

.controller('ProductDetailsCtrl', ['$scope', '$http', '$rootScope', '$stateParams', 'DetailsServices',
    function ($scope, $http, $rootScope, $stateParams, DetailsServices) {
        $scope.productList = [];
        $scope.product = [];
        $scope.showProductIndex = 0;
        $scope.productLoading = true;


        DetailsServices.get({ gasId: $stateParams.gasId }, function (product) {
            $scope.productList = product.product;
            for (var i = 0; i < $scope.productList.length; i++) {
                $scope.productList[i].images = $scope.productList[i].images.split(',');         //images string to array
                $scope.productList[i].color = $scope.productList[i].color.split(',');           //color string to array
                $scope.productList[i].secondType = $scope.productList[i].secondType.split(','); //secondType string to array
            }
            
            $scope.setProduct(0); //show first product
            $scope.productLoading = false;
            //imgMassiv = $scope.service.images;
        });

        $scope.setProduct = function (index) {
            $scope.product = $scope.productList[index];
            $scope.showProductIndex = index;
        }
    }]);