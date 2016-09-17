angular.module('portailGP').directive('histofactures', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/core/historiques/histofactures/histofactures.html',
    controllerAs: 'histofacturesctrl',
    controller: function ($scope, $stateParams, $reactive) {
      $reactive(this).attach($scope);


      this.helpers({

      });

    }
  }
});
