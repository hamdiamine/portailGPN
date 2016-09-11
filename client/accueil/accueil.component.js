angular.module('portailGP').directive('accueil', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/accueil/accueil.html',
    controllerAs: 'accueilctrl',
    controller: function ($scope, $stateParams, $reactive) {
      $reactive(this).attach($scope);


      this.helpers({

      });

    }
  }
});
