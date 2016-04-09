var appServices = angular.module('app.services', ['ngResource']);

appServices.factory('CaseService', ['$resource',
    function ($resource) {
        return $resource('https://script.google.com/macros/s/AKfycbym-L4i30NlGXch9CBNZOqjDHhVh55dOW3E0NOj2QnU487qzc3n/exec', {}, {
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

//отзывы
appServices.factory('ReviewsServices', ['$resource',
    function ($resource) {
        return $resource('https://script.google.com/macros/s/AKfycbzNkh7xSbSFOG7NitSB3uJuLxjOJGjkXXIiVwbshgr7f2AmHCo/exec', {}, {
            query: { method: 'GET', isArray: false }
        });
    }
]);

/*appServices.factory('UtensilsService', ['$resource',
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

appServices.factory('PuzzleService', ['$resource',
    function ($resource) {
        return $resource('https://script.google.com/macros/s/AKfycbwPZkxz0-OgSpIGgpsCYeinLhsxkxyRwje76eGVGd0fhY_m4SZC/exec', {}, {
            query: { method: 'GET', isArray: false }
        });
    }
]);*/

/*appServices.factory('DetailsServices', ['$resource',
    function ($resource) {
        return $resource('https://script.google.com/macros/s/:gasId/exec', {}, {
            query: { method: 'GET', params: { serviceId: 'services' }, isArray: true }
        });
    }
]);*/