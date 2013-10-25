angular.module('angularMobileDemoApp').directive('bidiViewAnimation', ['$route', '$rootScope', function ($route, $rootScope) {
  //always start the page as forward animation
  var lastRouteChangeWasForward = true;

  return function (scope, elm, attr) {
    var forwardCssClass = attr.forwardAnimation,
      backwardCssClass = attr.backwardAnimation;

    updateCssClasses();

    scope.$on('$routeChangeStart', onRouteChangeStart);

    function updateCssClasses() {
      elm.toggleClass(forwardCssClass, lastRouteChangeWasForward);
      elm.toggleClass(backwardCssClass, !lastRouteChangeWasForward);
    }

    function onRouteChangeStart(e, current, previous) {
      if (current && previous) {
        lastRouteChangeWasForward = current.depth > previous.depth;
        updateCssClasses();
      }
    }
  };
}]);