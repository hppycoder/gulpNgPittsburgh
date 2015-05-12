'use strict';

/**
 * @ngdoc service
 * @name cartApp.PhoneUtils
 * @description
 * # Using the Google PhoneLib to determine proper phone numbers
 * Provider in the cartApp.
 */
angular.module('cartApp')
  .provider('PhoneUtils', function () {

    // Method for instantiating
    this.$get = function () {
      return phoneUtils || {};
    };
  });
