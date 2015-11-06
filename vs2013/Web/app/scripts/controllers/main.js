'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('http://localhost:9000/sales/books').then(function (response) {
      $scope.books = response.data;
    })
  });
