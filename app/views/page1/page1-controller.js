'use strict';

angular.module('angularMobileDemoApp')
  .controller('Page1Ctrl', function($scope) {
    $scope.todos = createTodos(100);
    $scope.remove = remove;

    function createTodos(count) {
      var i = 0,
        res = [];
      for (i=0; i<100; i++) {
        res.push({
          label: 'Todo '+i
        });
      }
      return res;
    }


    function remove(index) {
      $scope.todos.splice(index, 1);
    }
});
