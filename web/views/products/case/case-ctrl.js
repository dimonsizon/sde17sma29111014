'use strict';

angular.module('app.case', ['ngRoute'])

.controller('CaseCtrl', ['$scope', '$http', '$rootScope', 'CaseService',
    function ($scope, $http, $rootScope, CaseService) {
        CaseService.query(function (data) {
            $scope.productList = data.cases;
        });
    }]);