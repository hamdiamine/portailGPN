angular.module('portailGP').directive('impayees', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/impayees/impayees.html',
    controllerAs: 'impayeesctrl',
    controller: function ($scope, $stateParams, $reactive) {
      $reactive(this).attach($scope);

      this.helpers({

      });

    }
  }
});
