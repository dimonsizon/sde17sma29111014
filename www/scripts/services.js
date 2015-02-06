var appServices = angular.module('appServices', ['ngResource']);

appServices.factory('Services', ['$resource',
    function ($resource) {
        return $resource('/json/services.json', {}, {
            query: { method: 'GET', isArray: false }
        });
    }
]);

appServices.factory('CaseServices', ['$resource',
    function ($resource) {
        return $resource('/json/case/:serviceId.json', {}, {
            query: { method: 'GET', params: { serviceId: 'services' }, isArray: true }
        });
    }
]);

appServices.factory('UtensilsServices', ['$resource',
    function ($resource) {
        return $resource('/json/utensils/:serviceId.json', {}, {
            query: { method: 'GET', params: { serviceId: 'services' }, isArray: true }
        });
    }
]);

appServices.factory('СlothingServices', ['$resource',
    function ($resource) {
        return $resource('/json/clothing/:serviceId.json', {}, {
            query: { method: 'GET', params: { serviceId: 'services' }, isArray: true }
        });
    }
]);

appServices.factory('TileServices', ['$resource',
    function ($resource) {
        return $resource('/json/tile/:serviceId.json', {}, {
            query: { method: 'GET', params: { serviceId: 'services' }, isArray: true }
        });
    }
]);

appServices.factory('PuzzlesServices', ['$resource',
    function ($resource) {
        return $resource('/json/puzzles/:serviceId.json', {}, {
            query: { method: 'GET', params: { serviceId: 'services' }, isArray: true }
        });
    }
]);