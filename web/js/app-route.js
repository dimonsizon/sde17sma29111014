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
            templateUrl: "/views/products/products-list.html",
            controller: 'CaseCtrl'
        })
        .state('keychain', {
            url: "/keychain",
            templateUrl: "/views/products/products-list.html",
            controller: 'KeychainCtrl'
        })
        .state('clock', {
            url: "/clock",
            templateUrl: "/views/products/products-list.html",
            controller: 'ClockCtrl'
        })
        .state('mugs', {
            url: "/mugs",
            templateUrl: "/views/products/products-list.html",
            controller: 'MugsCtrl'
        })
        .state('tshirts', {
            url: "/tshirts",
            templateUrl: "/views/products/products-list.html",
            controller: 'TshirtsCtrl'
        })
        .state('pillows', {
            url: "/pillows",
            templateUrl: "/views/products/products-list.html",
            controller: 'PillowsCtrl'
        })
        .state('puzzles', {
            url: "/puzzles",
            templateUrl: "/views/products/products-list.html",
            controller: 'PuzzlesCtrl'
        })
        .state('photostone', {
            url: "/photostone",
            templateUrl: "/views/products/products-list.html",
            controller: 'PhotostoneCtrl'
        })
        .state('photokristall', {
            url: "/photokristall",
            templateUrl: "/views/products/products-list.html",
            controller: 'PhotokristallCtrl'
        })
        .state('photoframe', {
            url: "/photoframe",
            templateUrl: "/views/products/products-list.html",
            controller: 'PhotoframeCtrl'
        })

        .state('editor', {
            url: "/editor",
            templateUrl: "/views/editor/editor.html",
            controller: 'EditorCtrl'
        })
            .state('editor.product', {
                url: "/:productType/:productId",
                templateUrl: "/views/editor/editor.html",
                controller: 'EditorCtrl'
            })



        .state('details', {
            url: "/product/:productType/:gasId",
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
        .state('cartPay', {
            url: "/cart/pay",
            templateUrl: "/views/cart/cart-pay.html",
            controller: 'CartCtrl'
        })
    ;
}]);