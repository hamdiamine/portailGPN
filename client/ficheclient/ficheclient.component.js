angular.module('portailGP').directive('ficheclient', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/ficheclient/ficheclient.html',
    controllerAs: 'ficheclientctrl',
    controller: function ($scope, $stateParams, $reactive) {
      $reactive(this).attach($scope);

      $scope.pageName = 'Fiche client';

      this.helpers({
        client:()=>{
          return Session.get('client');
        }
      });

    }
  }
});
