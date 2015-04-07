var appServices = angular.module('appServices', ['ngResource']);

appServices.factory('CaseService', ['$resource',
    function ($resource) {
        return $resource('https://script.google.com/macros/s/AKfycbxqCLaeL4Wwfg7UrNhmbYtoF6VHUoFqVj0I0cdL6_BHXRnx870/exec', {}, {
            query: { method: 'GET', isArray: false }
        });
    }
]);

appServices.factory('UtensilsService', ['$resource',
    function ($resource) {
        return $resource('https://script.google.com/macros/s/AKfycbw2-WoE7UtKsx1GAfOVy5yL7tvnXj1SxcxuMy_bYjSwD5BZ6XYy/exec', {}, {
            query: { method: 'GET', isArray: false }
        });
    }
]);

appServices.factory('СlothingService', ['$resource',
    function ($resource) {
        return $resource('https://script.google.com/macros/s/AKfycbywn2-MlI2LtDftp5C-dzEQgF_LZjs6UjnmneTWDeG3gcCkHO8/exec', {}, {
            query: { method: 'GET', isArray: false }
        });
    }
]);

appServices.factory('TileService', ['$resource',
    function ($resource) {
        return $resource('https://script.google.com/macros/s/AKfycbyTgf3KcTQTZsGjGL66F7bVQApsOWt80ewWF8eFf9yTfWUbb-ne/exec', {}, {
            query: { method: 'GET', isArray: false }
        });
    }
]);

appServices.factory('PuzzleService', ['$resource',
    function ($resource) {
        return $resource('https://script.google.com/macros/s/AKfycbwPZkxz0-OgSpIGgpsCYeinLhsxkxyRwje76eGVGd0fhY_m4SZC/exec', {}, {
            query: { method: 'GET', isArray: false }
        });
    }
]);

appServices.factory('DetailsServices', ['$resource',
    function ($resource) {
        return $resource('https://script.google.com/macros/s/:gasId/exec', {}, {
            query: { method: 'GET', params: { serviceId: 'services' }, isArray: true }
        });
    }
]);