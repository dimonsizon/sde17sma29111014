'use strict';

var appController = angular.module('appController', []);

appController.controller('appCtrl', function ($scope, $routeParams, $location) {
    var currentState = $location.path().split('/')[1];
    if ($location.path()=='') {
        currentState = 'home';
    }
    $scope.goTo = function (newState) {
        currentState = newState;
    }
    $scope.isOnState = function (state) {
        return currentState == state;
    }
});

appController.controller('CaseListCtrl', ['$scope', '$rootScope', '$routeParams', 'CaseService',
    function ($scope, $rootScope, $routeParams, CaseService) {
        var currentState = 'services.all';
        //$http.get('/views/services/json/services.json').success(function (data) {
        $scope.services = CaseService.query();
        //});

        $scope.filterDevice = function (device) {
            $scope.device = device;
        }

        $scope.goTo = function (newState) {
            currentState = newState;
        }
        $scope.isOnState = function (state) {
            return currentState == state;
        }
}]);

appController.controller('UtensilsListCtrl', ['$scope', '$rootScope', '$routeParams', 'UtensilsService',
    function ($scope, $rootScope, $routeParams, UtensilsService) {
        var currentState = 'services.all';
        $scope.services = UtensilsService.query();

        $scope.filterDevice = function (device) {
            $scope.device = device;
        }

        $scope.goTo = function (newState) {
            currentState = newState;
        }
        $scope.isOnState = function (state) {
            return currentState == state;
        }
}]);

appController.controller('СlothingListCtrl', ['$scope', '$rootScope', '$routeParams', 'СlothingService',
    function ($scope, $rootScope, $routeParams, СlothingService) {
        var currentState = 'services.all';
        $scope.services = СlothingService.query();

        $scope.filterDevice = function (device) {
            $scope.device = device;
        }

        $scope.goTo = function (newState) {
            currentState = newState;
        }
        $scope.isOnState = function (state) {
            return currentState == state;
        }
}]);

appController.controller('TileListCtrl', ['$scope', '$rootScope', '$routeParams', 'TileService',
    function ($scope, $rootScope, $routeParams, TileService) {
        var currentState = 'services.all';
        $scope.services = TileService.query();

        $scope.filterDevice = function (device) {
            $scope.device = device;
        }

        $scope.goTo = function (newState) {
            currentState = newState;
        }
        $scope.isOnState = function (state) {
            return currentState == state;
        }
}]);

appController.controller('PuzzleListCtrl', ['$scope', '$rootScope', '$routeParams', 'PuzzleService',
    function ($scope, $rootScope, $routeParams, PuzzleService) {
        var currentState = 'services.all';
        $scope.services = PuzzleService.query();

        $scope.filterDevice = function (device) {
            $scope.device = device;
        }

        $scope.goTo = function (newState) {
            currentState = newState;
        }
        $scope.isOnState = function (state) {
            return currentState == state;
        }
    }]);

appController.controller('serviceDetailsCtrl', ['$scope', '$rootScope', '$routeParams', '$location', 'CaseDetailsServices', 'UtensilsDetailsServices', 'СlothingDetailsServices', 'TileDetailsServices', 'PuzzlesDetailsServices',
    function ($scope, $rootScope, $routeParams, $location, CaseDetailsServices, UtensilsDetailsServices, СlothingDetailsServices, TileDetailsServices, PuzzlesDetailsServices) {
        var currentState;
        var imgMassiv;
        var location = $location.path().split('/')[1];
        var currentService = $rootScope.currentService(location); //location.charAt(0).toUpperCase() + location.slice(1) + 'Services';
        currentService = eval('(' + currentService + ')');

        $scope.url = $location.path().split('/')[1];

        $rootScope.saveDetails = currentService.get({ gasId: $routeParams.gasId }, function (service) {
            $scope.service = service.service[0]; //так как у меня джейсон такой (((
            $scope.service.images = $scope.service.images.split(','); //images string to array
            imgMassiv = $scope.service.images;            
        });

        

        $scope.getImage = function (url) {
            $scope.imageUrl = url;
        }
        $scope.nextImage = function (url) {
            var nextImgIndex = imgMassiv.indexOf(url) + 1;
            if (nextImgIndex == imgMassiv.length) { //если индекс последний
                nextImgIndex = 0; //начинаем с начала
            }
            var nextImg = imgMassiv[nextImgIndex];            
            $scope.imageUrl = nextImg;
        }
        $scope.prevImage = function (url) {
            var prevImgIndex = imgMassiv.indexOf(url) - 1;
            if (prevImgIndex == -1) { //если индекс 0
                prevImgIndex = imgMassiv.length-1; //начинаем с конца
            }
            var prevImg = imgMassiv[prevImgIndex];
            $scope.imageUrl = prevImg;
        }        
    }]);

appController.controller('orderCtrl', ['$scope', '$rootScope', '$routeParams', '$location', '$http', 'CaseDetailsServices', 'UtensilsDetailsServices', 'СlothingDetailsServices', 'TileDetailsServices', 'PuzzlesDetailsServices',
    function ($scope, $rootScope, $routeParams, $location, $http, CaseDetailsServices, UtensilsDetailsServices, СlothingDetailsServices, TileDetailsServices, PuzzlesDetailsServices) {
        $scope.url = $location.path().split('/')[1];
        if ($rootScope.saveDetails) {
            $scope.service = $rootScope.saveDetails.service[0];
        } else {
            var location = $location.path().split('/')[1];
            var currentService = $rootScope.currentService(location);
            currentService = eval('(' + currentService + ')');
            $scope.service = currentService.get({ gasId: $routeParams.gasId }, function (service) {
                $scope.service = service.service[0];
            });
        }

        $scope.result = 'hidden'
        $scope.resultMessage;
        $scope.formData; 
        $scope.submitButtonDisabled = false;
        $scope.submitted = false; 
        $scope.formData = {
            "serviceType": "Заказ",
            "userVkUrl": "",
            "userImage": "1.jpg",
            "userMessage": ""
        };
        $scope.aaa = $scope.service.name;

        $scope.submit = function (contactform) {
            $scope.submitted = true;
            $scope.submitButtonDisabled = true;
            if (contactform.$valid) {
                $http({
                    method: 'POST',
                    url: '/scripts/phpmailer/contact-form.php',
                    data: $.param($scope.formData),  //param method from jQuery
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
                }).success(function (data) {
                    console.log(data);
                    if (data.success) { //success comes from the return json object
                        $scope.submitButtonDisabled = true;
                        $scope.resultMessage = data.message;
                        $scope.result = 'bg-success';                      
                    } else {
                        $scope.submitButtonDisabled = false;
                        $scope.resultMessage = data.message;
                        $scope.result = 'bg-danger';
                    }
                });
            } else {
                $scope.submitButtonDisabled = false;
                $scope.resultMessage = 'Failed :( Please fill out all the fields.';
                $scope.result = 'bg-danger';
            }
        }
    }]);