angular.module('portailGP').directive('historiques', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/historiques/historiques.html',
    controllerAs: 'historiquesctrl',
    controller: function ($scope, $stateParams, $reactive) {
      $reactive(this).attach($scope);

      $scope.pageName = 'Historiques';

      this.helpers({

      });

    }
  }
});
