angular.module('portailGP').directive('all', function () {
  return {
    restrict: 'E',
    scope:true,
    templateUrl: 'client/template/all/all.html',
    controllerAs: 'allctrl',
    controller: function ($scope, $stateParams, $reactive, $state) {
      $reactive(this).attach($scope);
      $scope.pageName = null;
      if(!Session.get('client')||Session.get('client')===null){
        $state.go('login');
      }

      this.helpers({

      });

    }
  }
});
