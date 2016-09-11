angular.module('portailGP').directive('ficheclient', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/ficheclient/ficheclient.html',
    controllerAs: 'ficheclientctrl',
    controller: function ($scope, $stateParams, $reactive) {
      $reactive(this).attach($scope);


      this.helpers({

      });

    }
  }
});
