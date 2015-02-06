'use strict';

angular.module('appFilters', []).filter('device', function() {
    return function (device) {
        switch(device) {
            case 'all':
                device = '';
                break;
            case 'iPhone 4':
                device = 'iPhone 4';
                break;
            case 'iPhone 5':
                device = 'iPhone 5';
                break;
            case 'iPhone 6':
                device = 'iPhone 6';
                break;
            default:
                device = '';
        }
        return device;
    };
});