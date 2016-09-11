angular.module('portailGP').directive('topbar', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/template/topbar/topbar.html',
    controllerAs: 'topbarctrl',
    controller: function ($scope, $stateParams, $reactive) {
      $reactive(this).attach($scope);


      this.helpers({

      });

    }
  }
});
