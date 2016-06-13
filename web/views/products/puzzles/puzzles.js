'use strict';

angular.module('app.puzzles', ['ngRoute'])

.controller('PuzzlesCtrl', ['$scope', '$http', '$rootScope', 'PuzzleService',
    function ($scope, $http, $rootScope, PuzzleService) {
        $scope.mainFilters = ["Пазлы А5", "Пазлы Сердце", "Пазлы Детские"];

        PuzzleService.query(function (data) {
            $scope.productList = data.products;
        });


    }]);