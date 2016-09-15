angular.module('portailGP').directive('reclamationannul', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/reclamationannul/reclamationannul.html',
    controllerAs: 'reclamationannulctrl',
    controller: function ($scope, $stateParams, $reactive) {
      $reactive(this).attach($scope);

      this.helpers({

      });

    }
  }
});
