angular.module('portailGP').directive('reclamationencours', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/reclamationencours/reclamationencours.html',
    controllerAs: 'reclamationencoursctrl',
    controller: function ($scope, $stateParams, $reactive) {
      $reactive(this).attach($scope);

      this.helpers({

      });

    }
  }
});
