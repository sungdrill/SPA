'use strict';

/**
 * @ngdoc function
 * @name spa2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spa2App
 */
angular.module('spa2App')
  .controller('MainCtrl', function ($scope, fooConfig) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.fooConfig = fooConfig;
  })

  .constant('fooConfig', {
    config1: true,
    config2: "Default config2"
  })
;
