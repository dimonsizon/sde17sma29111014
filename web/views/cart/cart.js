'use strict';

angular.module('app.cart', ['ngRoute'])

.controller('CartCtrl', ['$scope', '$http', '$rootScope', 'ngCart',
    function ($scope, $http, $rootScope, ngCart) {
        $scope.clearCart = function () {
            ngCart.empty();
        }

        
    }]);