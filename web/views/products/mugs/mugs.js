'use strict';

angular.module('app.mugs', ['ngRoute'])

.controller('MugsCtrl', ['$scope', '$http', '$rootScope', 'MugService',
    function ($scope, $http, $rootScope, MugService) {
        $scope.mainFilters = ["Кружка белая", "Кружка цветная", "Кружка хамелеон", "Кружки партные", "Кружки парные с ручкой сердце"];

        MugService.query(function (data) {
            $scope.productList = data.products;
        });


    }]);