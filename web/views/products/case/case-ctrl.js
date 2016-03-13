'use strict';

angular.module('app.case', ['ngRoute'])

.controller('CaseCtrl', ['$scope', '$http', '$rootScope', 'appConfig',
    function ($scope, $http, $rootScope, appConfig) {
        $scope.test = 'Case )))';
    }]);