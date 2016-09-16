angular.module('portailGP').directive('impayees', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/impayees/impayees.html',
    controllerAs: 'impayeesctrl',
    controller: function ($scope, $stateParams, $reactive, $state) {
      $reactive(this).attach($scope);

      var idClient = Session.get('client').id;
      if(!idClient||idClient===null){
        $state.go('accueil');
      }

      this.subscribe('factures');

      this.helpers({
        impayees:()=>{
          return Factures.find({idPayeur:idClient,restantDu:{$gt:0}});
        }
      });

      this.ficheFacture=($index)=>{
        var idFacture = this.impayees[$index].idFacture;
        Session.set('idFacture', idFacture);
        $state.go('fichefacture');
      }

    }
  }
});
