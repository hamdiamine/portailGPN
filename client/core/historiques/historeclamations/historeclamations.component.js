angular.module('portailGP').directive('historeclamations', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/core/historiques/historeclamations/historeclamations.html',
    controllerAs: 'historeclamationsctrl',
    controller: function ($scope, $stateParams, $reactive) {
      $reactive(this).attach($scope);


      this.helpers({

      });

    }
  }
});
