'use strict';

angular.module('app.news', ['ngRoute'])

.controller('NewsCtrl', ['$scope', '$http', '$rootScope', 'appConfig', 'NewsServices',
    function ($scope, $http, $rootScope, appConfig, NewsServices) {
        NewsServices.get(function (data) {
            $scope.news = data.items.reverse();
        });
    }]);