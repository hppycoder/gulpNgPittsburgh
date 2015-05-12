'use strict';

/**
 * @ngdoc service
 * @name cartApp.Modernizr
 * @description
 * # Modernizr
 * Provider in the cartApp.
 */
angular.module('cartApp')
  .provider('Modernizr', function () {

    // Method for instantiating
    this.$get = function () {
      return Modernizr || {};
    };
  });
