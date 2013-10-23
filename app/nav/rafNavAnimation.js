angular.module('angularMobileDemoApp')
  .config(['$animateProvider', function ($animateProvider) {
    var ANIMATION_DURATION_MS = 500,
        EMULATED_RAF_TIMEOUT_MS = 17;

    $animateProvider.register('.rafNavForward', ['$window', rafForwardAnimation]);
    $animateProvider.register('.rafNavBackward', ['$window', rafBackwardNavigation]);

    function rafForwardAnimation($window) {
      return {
        enter: createTranslateXInPercentAnimation($window, -100, 0),
        leave: createTranslateXInPercentAnimation($window, 0, 100)
      };
    }

    function rafBackwardNavigation($window) {
      return {
        enter: createTranslateXInPercentAnimation($window, 100, 0),
        leave: createTranslateXInPercentAnimation($window, 0, -100)
      };
    }

    function createTranslateXInPercentAnimation($window, from, to) {
      return function(element, done) {
        animate($window, from, to, ANIMATION_DURATION_MS, function(val) {
          // extra translateZ do keep the element promoted to it's own layer.
          // Otherwise we would get a repaint on every requestAnimationFrame!
          element[0].style.webkitTransform = 'translateX('+val+'%) translateZ(0px)';
        }, done);
      }
    }

    function animate($window, from, to, duration, render, done) {
      var startTime = Date.now();
      update();

      function update() {
        var now = Date.now(),
            timeDiff = now - startTime,
            valDiff = to - from;
        if (timeDiff <= duration) {
          render(from + (valDiff * timeDiff / duration));
          $window.requestAnimationFrame(update);
        } else {
          render(to);
          done();
        }
      }
    }
  }]
);