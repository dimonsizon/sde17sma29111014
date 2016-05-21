var appDirectives = angular.module('app.directives', []);

appDirectives.directive('productsContainer', [function () {
    return {
        restriction: 'E',
        templateUrl: "/views/directives-template/products-container.html",
        scope: {
            productsList: '=',
            mainFilters: '=',
            productMainFilter: '=',
            productFilter: '='
        },
        link: function (scope, element, attrs) {

        },
        controller: function ($scope, $element, $attrs, $rootScope) {
            $scope.showAllMainFilters = true;
            $scope.showAllFilters = function (value) {
                $scope.showAllMainFilters = value;
            }
        }
    }
}]);

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
            productMainFilter: '=',
            productFilter: '='
        },
        link: function (scope, element, attrs) {

        },
        controller: function ($scope, $element, $attrs, $rootScope) {

        }
    }
}]);