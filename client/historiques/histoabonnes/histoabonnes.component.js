angular.module('portailGP').directive('histoabonnes', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/historiques/histoabonnes/histoabonnes.html',
    controllerAs: 'histoabonnesctrl',
    controller: function ($scope, $stateParams, $reactive) {
      $reactive(this).attach($scope);

      this.helpers({

      });

    }
  }
});
