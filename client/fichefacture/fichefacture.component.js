angular.module('portailGP').directive('fichefacture', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/fichefacture/fichefacture.html',
    controllerAs: 'fichefacturectrl',
    controller: function ($scope, $stateParams, $reactive) {
      $reactive(this).attach($scope);

      var idFacture = Session.get('idFacture');

      this.subscribe('factures');

      $scope.pageName = 'Fihe facture';

      this.helpers({
        facture:()=>{
          return Factures.findOne({'id':idFacture});
        }
      });

    }
  }
});
