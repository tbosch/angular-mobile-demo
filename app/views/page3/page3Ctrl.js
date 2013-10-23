'use strict';

angular.module('angularMobileDemoApp')
  .controller('Page3Ctrl', function($scope) {
    $scope.texts = [];

    var counter = 0;
    $scope.loadMore = function() {
      for (var i = 0; i < 10; i++) {
        $scope.texts.push('Text '+counter);
        counter ++;
      }
    };

    $scope.loadMore();
    $scope.loadMore();
    $scope.loadMore();

  });
