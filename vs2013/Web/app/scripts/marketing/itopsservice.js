'use strict';

/**
 * @ngdoc service
 * @name marketing.itOpsService
 * @description
 * # itOpsService
 * Service in the marketing.
 */
angular.module('marketing', [])
  .factory('itOpsService', function (endpoint, $http) {
    return {
      getBooks: function () {
        return $http.get(endpoint + '/sales/books');
      }
    }
  });
