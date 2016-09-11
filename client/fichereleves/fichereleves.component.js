angular.module('portailGP').directive('fichereleves', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/fichereleves/fichereleves.html',
    controllerAs: 'ficherelevesctrl',
    controller: function ($scope, $stateParams, $reactive) {
      $reactive(this).attach($scope);


      this.helpers({

      });

    }
  }
});
