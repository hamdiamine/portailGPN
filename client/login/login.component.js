angular.module('portailGP').directive('login', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/login/login.html',
    controllerAs: 'loginctrl',
    controller: function ($scope, $stateParams, $reactive, $state) {
      $reactive(this).attach($scope);
      $scope.login = true;

      this.helpers({

      });

      this.authentification=()=>{
        $scope.login = false;
        $state.go('accueil');
      }

    }
  }
});
