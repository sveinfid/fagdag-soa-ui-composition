'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('BookStoreCtrl', function (marketingItOpsService, $scope) {

    marketingItOpsService.getBooks()
      .then(function (response) {
        $scope.books = response.data;
    });

  });
