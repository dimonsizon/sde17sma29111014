var appDirectives = angular.module('app.directives', []);

appDirectives.directive('productList', [function () {
    return {
        restriction: 'E',
        templateUrl: "/views/directives-template/product-list-template.html",
        scope: {
            productsList: '='
        },
        link: function (scope, element, attrs) {

        },
        controller: function ($scope, $element, $attrs, $rootScope) {

        }
    }
}]);