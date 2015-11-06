'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('BookStoreCtrl', function (itOpsService, $scope) {

    itOpsService.getBooks()
      .then(function (response) {
        $scope.books = response.data;
    });

  });
