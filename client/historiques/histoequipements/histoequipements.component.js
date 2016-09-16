angular.module('portailGP').directive('histoequipements', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/historiques/histoequipements/histoequipements.html',
    controllerAs: 'histoequipementsctrl',
    controller: function ($scope, $stateParams, $reactive) {
      $reactive(this).attach($scope);

      this.helpers({

      });

    }
  }
});
