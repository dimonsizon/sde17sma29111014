'use strict';

angular.module('app.contacts', ['ngRoute'])

.controller('ContactsCtrl', ['$scope', '$http', '$rootScope', 'appConfig',
    function ($scope, $http, $rootScope, appConfig) {



        $scope.submit = function (contactform) {
            //if (contactform.$valid) {
                $http({
                    method: 'POST',
                    url: '/js/phpmailer/contact-form.php',
                    data: $.param($scope.formData),  //param method from jQuery
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
                }).success(function (data) {
                    console.log(data);
                    $scope.resultMessage = data.message;
                    //if (data.success) { //success comes from the return json object
                    //    $scope.submitButtonDisabled = true;
                    //    $scope.resultMessage = data.message;
                    //    $scope.result = 'bg-success';
                    //} else {
                    //    $scope.submitButtonDisabled = false;
                    //    $scope.resultMessage = data.message;
                    //    $scope.result = 'bg-danger';
                    //}
                });
            //} else {
            //    $scope.submitButtonDisabled = false;
            //    $scope.resultMessage = 'Failed :( Please fill out all the fields.';
            //    $scope.result = 'bg-danger';
            //}
        }



    }]);