angular.module('portailGP').directive('topbar', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/template/topbar/topbar.html',
    controllerAs: 'topbarctrl',
    controller: function ($scope, $stateParams, $reactive, $state) {
      $reactive(this).attach($scope);

      this.helpers({
      });

      this.deconnexion=()=>{
        $scope.login = true;
        $scope.compte = undefined;
        Session.set('client', undefined);
        $state.go('login');
      }
    }
  }
});
