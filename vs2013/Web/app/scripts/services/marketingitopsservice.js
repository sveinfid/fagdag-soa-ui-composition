'use strict';

/**
 * @ngdoc service
 * @name webApp.marketingItOpsService
 * @description
 * # marketingItOpsService
 * Service in the webApp.
 */
angular.module('webApp')
  .factory('marketingItOpsService', function (endpoint, $http) {
    return {
      getBooks: function () {
        return $http.get(endpoint + '/sales/books');
      }
    }
  });
