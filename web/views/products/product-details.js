'use strict';

angular.module('app.productDetails', ['ngRoute'])

.controller('ProductDetailsCtrl', ['$scope', '$http', '$rootScope', '$stateParams', 'DetailsServices',
    function ($scope, $http, $rootScope, $stateParams, DetailsServices) {
        $scope.product = [];
        $scope.showProductIndex = 0;
        $scope.productLoading = true;


        DetailsServices.get({ gasId: $stateParams.gasId }, function (product) {
            $scope.product = product.product;
            for (var i = 0; i < $scope.product.length; i++) {
                $scope.product[i].images = $scope.product[i].images.split(','); //images string to array
            }
            
            $scope.productLoading = false;
            //imgMassiv = $scope.service.images;
        });
    }]);