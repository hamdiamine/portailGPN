angular.module('portailGP').directive('accueil', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/core/accueil/accueil.html',
    controllerAs: 'accueilctrl',
    controller: function ($scope, $stateParams, $reactive, $state) {
      $reactive(this).attach($scope);

      var id = Session.get('client').id;

      this.subscribe('clients');
      this.subscribe('histoRoleClients'); //()=>[idClient]


      this.helpers({
        client: () => {
          var c = Clients.findOne({'id':id});
          return c;
        },
        listRoleClient:()=>{
          var l = HistoRoleClients.find({'idClient':id});
          return l;
        }
      });

      this.ficheSynthese = ($index) => {
        var idPdl = this.listRoleClient[$index].idPdl;
        Session.set('idPdl', idPdl);
        $state.go('fichesynthese');
      }

    }
  }
});
