angular.module('portailGP').directive('rightnewsbar', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/template/rightnewsbar/rightnewsbar.html',
    controllerAs: 'rightnewsbarctrl',
    controller: function ($scope, $stateParams, $reactive) {
      $reactive(this).attach($scope);


      this.helpers({

      });

    }
  }
});
