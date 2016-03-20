var appDirectives = angular.module('app.directives', []);

appDirectives.directive('productFilters', [function () {
    return {
        restriction: 'E',
        templateUrl: "/views/directives-template/product-filters-template.html",
        scope: {
            productsList: '=',
            rootScope: '='
        },
        link: function (scope, element, attrs) {
            
        },
        controller: function ($scope, $element, $attrs, $rootScope) {

        }
    }
}]);

appDirectives.directive('productList', [function () {
    return {
        restriction: 'E',
        templateUrl: "/views/directives-template/product-list-template.html",
        scope: {
            productsList: '=',
            productFilter: '='
        },
        link: function (scope, element, attrs) {

        },
        controller: function ($scope, $element, $attrs, $rootScope) {

        }
    }
}]);