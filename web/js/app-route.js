'use strict';

angular.module('app.route', ['ngRoute'])

.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: '/views/home/home.html',
            controller: 'HomeCtrl'
        })
        .state('case', {
            url: "/case",
            templateUrl: "/views/products/case/case.html",
            controller: 'CaseCtrl'
        })
        .state('details', {
            url: "/:productType/:gasId",
            templateUrl: "/views/products/product-details.html",
            controller: 'ProductDetailsCtrl'
        })
        .state('reviews', {
            url: "/reviews",
            templateUrl: "/views/reviews/reviews.html",
            controller: 'ReviewsCtrl'
        })
        .state('faq', {
            url: "/faq",
            templateUrl: "/views/faq/faq.html"
        })
        .state('news', {
            url: "/news",
            templateUrl: "/views/news/news.html",
            controller: 'NewsCtrl'
        })
        .state('delivery', {
            url: "/delivery",
            templateUrl: "/views/delivery/delivery.html"
        })
        .state('contacts', {
            url: "/contacts",
            templateUrl: "/views/contacts/contacts.html",
            controller: 'ContactsCtrl'
        })
        .state('cart', {
            url: "/cart",
            templateUrl: "/views/cart/cart.html",
            controller: 'CartCtrl'
        })
    ;
}]);