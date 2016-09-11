angular.module('portailGP').directive('fichefacture', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/fichefacture/fichefacture.html',
    controllerAs: 'fichefacturectrl',
    controller: function ($scope, $stateParams, $reactive) {
      $reactive(this).attach($scope);


      this.helpers({

      });

    }
  }
});
