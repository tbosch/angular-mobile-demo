'use strict';

angular.module('angularMobileDemoApp', [
    'ngRoute',
    'ngAnimate',
    'ngTouch',
    'angular-carousel',
    'ajoslin.scrolly',
    'scroll'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/page1', {
        templateUrl: 'views/page1/page1.html',
        controller: 'Page1Ctrl',
        depth: 0,
        title: 'Page 1'
      })
      .when('/page2', {
        templateUrl: 'views/page2/page2.html',
        controller: 'Page2Ctrl',
        depth: 1,
        title: 'Page 2'
      })
      .when('/page3', {
        templateUrl: 'views/page3/page3.html',
        controller: 'Page3Ctrl',
        depth: 1,
        title: 'Page 3'
      })
      .otherwise({
        redirectTo: '/page1'
      });
  })
  .run(function () {
    // FastClick.attach(document.body);
  });

