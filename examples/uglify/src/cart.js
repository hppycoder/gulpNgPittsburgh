'use strict';

/**
 * @ngdoc overview
 * @name cartApp
 * @description
 * # cartApp
 *
 * Main module of the application.
 */
angular
  .module('cartApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

'use strict';

/**
 * @ngdoc function
 * @name cartApp.controller:Step1Ctrl
 * @description
 * # Step1Ctrl
 * Controller of the cartApp
 */
angular.module('cartApp')
  .controller('Step1Ctrl', ["$sce", "$scope", "$timeout", "$window", function ($sce, $scope, $timeout, $window) {
  }]);

'use strict';

/**
 * @ngdoc function
 * @name cartApp.controller:Step2Ctrl
 * @description
 * # Step2Ctrl
 * Controller of the cartApp
 */
angular.module('cartApp')
  .controller('Step2Ctrl', ["$rootScope", "$window", "$scope", "$q", "$timeout", "$location", function ($rootScope, $window, $scope, $q, $timeout, $location) {

  }]);

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

