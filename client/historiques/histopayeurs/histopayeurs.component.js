angular.module('portailGP').directive('histopayeurs', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/historiques/histopayeurs/histopayeurs.html',
    controllerAs: 'histopayeursctrl',
    controller: function ($scope, $stateParams, $reactive) {
      $reactive(this).attach($scope);


      this.helpers({

      });

    }
  }
});
