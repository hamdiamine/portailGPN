angular.module('portailGP').directive('compteclient', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/compteclient/compteclient.html',
    controllerAs: 'compteclientctrl',
    controller: function ($scope, $stateParams, $reactive) {
      $reactive(this).attach($scope);

      var idClient = Session.get("idClient");
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

    }
  }
});
