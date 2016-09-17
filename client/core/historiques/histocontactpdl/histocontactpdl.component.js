angular.module('portailGP').directive('histocontactpdl', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/core/historiques/histocontactpdl/histocontactpdl.html',
    controllerAs: 'histocontactpdlctrl',
    controller: function ($scope, $stateParams, $reactive) {
      $reactive(this).attach($scope);

      this.helpers({

      });

    }
  }
});
