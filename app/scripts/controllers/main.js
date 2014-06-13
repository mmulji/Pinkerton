'use strict';

/**
 * @ngdoc function
 * @name appNameApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appNameApp
 */
angular.module('appNameApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
