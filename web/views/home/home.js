'use strict';

angular.module('app.home', ['ngRoute'])

.controller('HomeCtrl', ['$scope', '$http', '$rootScope', 'appConfig', 'NewsServices', 'ReviewsServices', '$filter',
    function ($scope, $http, $rootScope, appConfig, NewsServices, ReviewsServices, $filter) {
        $scope.currentDate = $filter('date')(new Date(), 'dd.MM.yy');
        $scope.sliderImages = [
            '/images/slider-images/1.jpg',
            '/images/slider-images/2.jpg',
            '/images/slider-images/3.jpg',
            '/images/slider-images/4.jpg',
            '/images/slider-images/5.jpg',
            '/images/slider-images/6.jpg',
            '/images/slider-images/7.jpg',
            '/images/slider-images/8.jpg',
            '/images/slider-images/9.jpg',
            '/images/slider-images/10.jpg',
            '/images/slider-images/11.jpg',
            '/images/slider-images/12.jpg',
            '/images/slider-images/13.jpg'
        ];

        NewsServices.get(function (data) {
            $scope.news = data.items.reverse();
        });

        ReviewsServices.get(function (data) {
            $scope.reviews = data.items;
        });
    }]);