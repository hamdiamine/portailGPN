angular.module('portailGP').directive('compteclient', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/core/compteclient/compteclient.html',
    controllerAs: 'compteclientctrl',
    controller: function ($scope, $stateParams, $reactive) {
      $reactive(this).attach($scope);

      var idClient = Session.get('client').id;
      if(!idClient||idClient===null){
        $state.go('accueil');
      }

      this.subscribe('comptes');
      this.subscribe('lignecomptes');

      this.helpers({
        comptes:()=>{
          return Comptes.find({'idClient':idClient});
        },
        lignes:()=>{
          return LigneComptes.find({'idClient':idClient});
        }
      });

      this.ficheFacture=($index)=>{
        var idFacture = this.lignes[$index].idFacture;
        Session.set('idFacture', idFacture);
        $state.go('fichefacture');
      }

    }
  }
});
