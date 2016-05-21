'use strict';

angular.module('app.keychain', ['ngRoute'])

.controller('KeychainCtrl', ['$scope', '$http', '$rootScope', 'KeychainService',
    function ($scope, $http, $rootScope, KeychainService) {
        $scope.mainFilters = ["Брелок гос номер", "Брелок Адресник", "Брелок Сердце", "Брелок Жетон", "Брелог Круг"];

        KeychainService.query(function (data) {
            $scope.productList = data.products;
        });
    }]);