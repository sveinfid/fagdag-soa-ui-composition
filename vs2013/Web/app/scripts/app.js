'use strict';

/**
 * @ngdoc overview
 * @name webApp
 * @description
 * # webApp
 *
 * Main module of the application.
 */
angular
  .module('webApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'marketing'
  ])
  .constant('endpoint', 'http://localhost:9000')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/bookstore.html',
        controller: 'BookStoreCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
