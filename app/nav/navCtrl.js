'use strict';

angular.module('angularMobileDemoApp')
  .controller('NavCtrl', function ($scope, $location, navigationCssClasses) {
    this.directionClass = navigationCssClasses.forward;
    this.back = backward;
    this.forward = forward;

    function forward(url) {
      $location.url(url);
      this.directionClass = navigationCssClasses.forward;
    }

    function backward(url) {
      $location.url(url);
      this.directionClass = navigationCssClasses.backward;
    }
  });
