'use strict';

/**
 * @ngdoc overview
 * @name spa2App
 * @description
 * # spa2App
 *
 * Main module of the application.
 */
angular
  .module('spa2App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    // 각 url 및 state에 따라 라우팅 설정
    $stateProvider
    // index state 라우팅 설정
      .state('index', {
        url: "/",
        views:{
          "contents": {
            templateUrl: "views/main.html",
            // 컨트롤러 설정
            controller : 'MainController'
          }
        }
      });

    $urlRouterProvider.otherwise("/");
  });
