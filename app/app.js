'use strict';

angular.module('angularMobileDemoApp', ['ngRoute', 'ngAnimate', 'ngTouch', "angular-carousel", 'ajoslin.scrolly', 'scroll'])
  .factory('$anchorScroll', function() {
    return angular.noop;
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/page1', {
        templateUrl: 'views/page1/page1.html',
        controller: 'Page1Ctrl',
        depth: 0
      })
      .when('/page2', {
        templateUrl: 'views/page2/page2.html',
        controller: 'Page2Ctrl',
        depth: 1
      })
      .when('/page3', {
        templateUrl: 'views/page3/page3.html',
        controller: 'Page3Ctrl',
        depth: 1
      })
      .otherwise({
        redirectTo: '/page1'
      });
  })
  .run(function ($rootScope) {
    $rootScope.viewSlideAnimation = 'slide-left'; //always start the page from the left

    $rootScope.$on('$routeChangeStart', function(e, current, previous) {
      $rootScope.viewSlideAnimation = solveDirection(current, previous) || $rootScope.viewSlideAnimation;
    });

    $rootScope.$on('$routeChangeSuccess', function(e, current, previous) {
      $rootScope.viewSlideAnimation = solveDirection(current, previous, true) || $rootScope.viewSlideAnimation;
    });

    function solveDirection(current, previous, reverse) {
      if(previous && current) {
        return reverse ?
          (current.depth < previous.depth ? 'slide-left' : 'slide-right') :
          (current.depth < previous.depth ? 'slide-right' : 'slide-left');
      }
    }
  })
  /* css3 animations */
  .constant('navigationCssClasses', {
    forward: 'navForward',
    backward: 'navBackward'
  })
  /* requestAnimationFrame animations
  .constant('navigationCssClasses', {
    forward: 'navForward',
    backward: 'navBackward'
  }) */
  /* Use fastclick.js
  .run(function() {
    FastClick.attach(document.body);
  });
  */

