angular.module('portailGP').directive('compteclient', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/compteclient/compteclient.html',
    controllerAs: 'compteclientctrl',
    controller: function ($scope, $stateParams, $reactive) {
      $reactive(this).attach($scope);


      this.helpers({

      });

    }
  }
});
