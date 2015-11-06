'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('BookStoreCtrl', function (endpoint, $scope, $http) {
    $http.get(endpoint + '/sales/books').then(function (response) {
      $scope.books = response.data;
    });

    //$http.get('/sales/books').then(function (response) {
    //  $scope.books = response.data;
    //});
  });
