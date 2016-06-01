'use strict';

angular.module('app.cart', ['ngRoute'])

.controller('CartCtrl', ['$scope', '$http', '$rootScope', 'ngCart',
    function ($scope, $http, $rootScope, ngCart) {
        $scope.cartItems = ngCart.getCart().items;

        $scope.clearCart = function () {
            ngCart.empty();
        }

        
    }]);