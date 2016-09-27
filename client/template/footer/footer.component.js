angular.module('portailGP').directive('footer', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/template/footer/footer.html',
    controllerAs: 'footerctrl',
    controller: function ($scope, $stateParams, $reactive) {
      $reactive(this).attach($scope);

      this.helpers({

      });

    }
  }
});
