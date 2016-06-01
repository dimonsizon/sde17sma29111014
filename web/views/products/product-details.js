'use strict';

angular.module('app.productDetails', ['ngRoute'])

.controller('ProductDetailsCtrl', ['$scope', '$http', '$rootScope', '$stateParams', '$modal', 'DetailsServices', 'ReviewsServices',
    function ($scope, $http, $rootScope, $stateParams, $modal, DetailsServices, ReviewsServices) {
        $scope.productList = [];
        $scope.product = [];
        $scope.reviews = [];
        $scope.productLoading = true;
        $scope.reviewsLoading = true;
        $scope.showProductIndex = 0;


        DetailsServices.get({ gasId: $stateParams.gasId }, function (product) {
            $scope.productList = product.product;
            for (var i = 0; i < $scope.productList.length; i++) {
                $scope.productList[i].images = $scope.productList[i].images.split(',');         //images string to array
                $scope.productList[i].color = $scope.productList[i].color.split(',');           //color string to array
                $scope.productList[i].secondType = $scope.productList[i].secondType.split(','); //secondType string to array
            }
            
            $scope.setProduct(0); //show first product
            $scope.productLoading = false;
        });

        ReviewsServices.get(function (data) {
            $scope.reviews = data.items;

            $scope.reviewsLoading = false;
        });

        $scope.setProduct = function (index) {
            $scope.product = $scope.productList[index];
            $scope.showProductIndex = index;
        }

        $scope.setSecondType = function (item) {
            $scope.selectedSecondType = item; //type, color or size for cart
        }

        //images window
        $scope.openImagesWindow = function (imageIndex) {
            var modalInstance = $modal.open({
                templateUrl: '/views/modal-template/product-images-window.html',
                windowClass: 'product-images-window',
                //size: 'sm',
                controller: [
                    '$scope', '$modalInstance', 'productImages', function ($scope, $modalInstance, productImages) {
                        $scope.images = productImages;
                        $scope.close = function () {
                            $modalInstance.dismiss();
                        };

                        $scope.interval = 5000;
                    }
                ],
                resolve: {
                    productImages: function () {      
                        var beforeIndex = $scope.product.images.slice();
                        var afterIndex = $scope.product.images.slice();
                        beforeIndex.splice(0, imageIndex); //array before index
                        var newImagesArray = afterIndex.splice(imageIndex, beforeIndex.length); //array after index
                        newImagesArray = newImagesArray.concat(beforeIndex); //change array, added "before index" to the end of array

                        return newImagesArray;
                    }
                }
            });
            modalInstance.result.then(function () {
            }, function () {
            });

        }
    }]);