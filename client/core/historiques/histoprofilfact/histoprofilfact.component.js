angular.module('portailGP').directive('histoprofilfact', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/core/historiques/histoprofilfact/histoprofilfact.html',
    controllerAs: 'histoprofilfactctrl',
    controller: function ($scope, $stateParams, $reactive) {
      $reactive(this).attach($scope);


      this.helpers({

      });

    }
  }
});
