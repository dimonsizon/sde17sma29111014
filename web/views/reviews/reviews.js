'use strict';

angular.module('app.reviews', ['ngRoute'])

.controller('ReviewsCtrl', ['$scope', '$http', '$rootScope', 'appConfig', 'ReviewsServices',
    function ($scope, $http, $rootScope, appConfig, ReviewsServices) {
        ReviewsServices.get(function (data) {
            $scope.reviews = data.items;
        });
    }]);