'use strict';

// Declare app level module which depends on filters, and services
angular.module('MA.Common', ['ngResource', 'ngCookies']).
    config(['$routeProvider', '$locationProvider', function(routeProvider, locationProvider) {
        routeProvider.when('/errors/404', {templateUrl: '/partial/errors/404' });
        routeProvider.otherwise({redirectTo: '/errors/404'});
        locationProvider.html5Mode(true);
    }]);