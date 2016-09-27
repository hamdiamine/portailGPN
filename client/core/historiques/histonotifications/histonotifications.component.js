angular.module('portailGP').directive('histonotifications', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/core/historiques/histonotifications/histonotifications.html',
    controllerAs: 'histonotificationsctrl',
    controller: function ($scope, $stateParams, $reactive) {
      $reactive(this).attach($scope);


      this.helpers({

      });

    }
  }
});
