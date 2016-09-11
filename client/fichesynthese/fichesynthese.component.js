angular.module('portailGP').directive('fichesynthese', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/fichesynthese/fichesynthese.html',
    controllerAs: 'fichesynthesectrl',
    controller: function ($scope, $stateParams, $reactive) {
      $reactive(this).attach($scope);


      this.helpers({

      });

    }
  }
});
