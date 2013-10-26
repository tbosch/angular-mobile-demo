angular.module('angularMobileDemoApp')
  .controller('AppCtrl', function($scope, $location) {
    $scope.$location = $location;
    var menuShown,
        self = this;

    this.toggleMenu = toggleMenu;
    this.activeLink = activeLink;
    this.toggleMenu(false);

    $scope.$on('$routeChangeSuccess', function(e, current) {
      self.toggleMenu(false);
      self.pageTitle = current.title;
    });

    function activeLink(url) {
      return $location.url().indexOf(url) === 0;
    }

    function toggleMenu(newValue) {
      if (arguments.length>0) {
        this.menuShown = newValue;
      } else {
        this.menuShown = !this.menuShown;
      }
    }
  });
