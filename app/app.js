'use strict';

angular.module('angularMobileDemoApp', ['ngRoute', 'ngAnimate', 'ajoslin.scrolly', 'scroll'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/page1', {
        templateUrl: 'views/page1/page1.html',
        controller: 'Page1Ctrl'
      })
      .when('/page2', {
        templateUrl: 'views/page2/page2.html',
        controller: 'Page2Ctrl'
      })
      .when('/page3', {
        templateUrl: 'views/page3/page3.html',
        controller: 'Page3Ctrl'
      })
      .otherwise({
        redirectTo: '/page1'
      });
  })
  /* css3 animations */
  .constant('navigationCssClasses', {
    forward: 'navForward',
    backward: 'navBackward'
  });
