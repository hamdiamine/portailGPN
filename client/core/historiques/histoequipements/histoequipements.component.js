angular.module('portailGP').directive('histoequipements', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/core/historiques/histoequipements/histoequipements.html',
    controllerAs: 'histoequipementsctrl',
    controller: function ($scope, $stateParams, $reactive) {
      $reactive(this).attach($scope);

      this.helpers({

      });

    }
  }
});
