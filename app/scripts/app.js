'use strict';

/**
 * @ngdoc overview
 * @name stcheckerApp
 * @description
 * # stcheckerApp
 *
 * Main module of the application.
 */
angular
  .module('stcheckerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'Example',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
