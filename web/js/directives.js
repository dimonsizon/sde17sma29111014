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


appDirectives.directive('ngThumb', ['$window', function($window) {
    var helper = {
        support: !!($window.FileReader && $window.CanvasRenderingContext2D),
        isFile: function(item) {
            return angular.isObject(item) && item instanceof $window.File;
        },
        isImage: function(file) {
            var type =  '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    };

    return {
        restrict: 'E',
        template: '<canvas/>',
        scope: {
            file: '=',
            height: '='
        },
        link: function(scope, element, attributes) {
            if (!helper.support) return;

            var params = scope.$eval(attributes.ngThumb);

            if (!helper.isFile(scope.file)) return;
            if (!helper.isImage(scope.file)) return;

            var canvas = element.find('canvas');
            var reader = new FileReader();

            reader.onload = onLoadFile;
            reader.readAsDataURL(scope.file);

            function onLoadFile(event) {
                var img = new Image();
                img.onload = onLoadImage;
                img.src = event.target.result;
            }

            function onLoadImage() {
                var width = scope.width || this.width / this.height * scope.height;
                var height = scope.height || this.height / this.width * scope.width;
                canvas.attr({ width: width, height: height });
                canvas[0].getContext('2d').drawImage(this, 0, 0, width, height);
            }
        }
    };
}]);