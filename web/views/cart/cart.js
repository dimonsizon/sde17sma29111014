'use strict';

angular.module('app.cart', ['ngRoute'])

.controller('CartCtrl', ['$scope', '$http', '$rootScope', '$location', '$timeout', 'ngCart', 'toastr',
    function ($scope, $http, $rootScope, $location, $timeout, ngCart, toastr) {
        var cartItems = ngCart.getCart().items;
        $scope.cartItems = [];

        _.each(cartItems, function (item) {
            $scope.cartItems.push({
                id: item._id,
                name: item._name,
                price: item._price,
                quantity: item._quantity,
                data: item._data,
                image: item._image,
            });
        });

        $scope.clearCart = function () {
            ngCart.empty();
        }

        $scope.submit = function (contactform) {
            $scope.formData.cartItems = $scope.cartItems;
            $http({
                method: 'POST',
                url: '/js/phpmailer/contact-form.php',
                data: $.param($scope.formData),  //param method from jQuery
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
            }).success(function (data) {
                console.log(data);
                toastr.success('Заказ отправлен. С вами свяжутся в ближайшее время');
                $scope.resultMessage = data.message;
                $scope.clearCart(); //clear basket
                $timeout(function () {
                    $location.path('/');
                }, 3000);                
            });

        }

        
    }]);