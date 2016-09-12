angular.module('portailGP').directive('all', function () {
  return {
    restrict: 'E',
    scope:true,
    templateUrl: 'client/template/all/all.html',
    controllerAs: 'allctrl',
    controller: function ($scope, $stateParams, $reactive) {
      $reactive(this).attach($scope);
      $scope.login = false;
      this.helpers({

      });

    }
  }
});
