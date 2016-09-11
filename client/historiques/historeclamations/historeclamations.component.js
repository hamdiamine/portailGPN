angular.module('portailGP').directive('historeclamations', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/historiques/historeclamations/historeclamations.html',
    controllerAs: 'historeclamationsctrl',
    controller: function ($scope, $stateParams, $reactive) {
      $reactive(this).attach($scope);


      this.helpers({

      });

    }
  }
});
