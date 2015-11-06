'use strict';

/**
 * @ngdoc service
 * @name webApp.marketingItOpsService
 * @description
 * # marketingItOpsService
 * Service in the webApp.
 */
angular.module('marketing', [])
  .factory('itOpsService', function (endpoint, $http) {
    return {
      getBooks: function () {
        return $http.get(endpoint + '/sales/books');
      }
    }
  });
