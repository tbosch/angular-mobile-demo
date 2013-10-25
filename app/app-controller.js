angular.module('angularMobileDemoApp')
  .controller('AppCtrl', function($scope, $location) {
    $scope.$location = $location;
  });
