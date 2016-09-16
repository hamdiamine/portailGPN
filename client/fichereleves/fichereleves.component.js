angular.module('portailGP').directive('fichereleves', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/fichereleves/fichereleves.html',
    controllerAs: 'ficherelevesctrl',
    controller: function ($scope, $stateParams, $reactive, $state) {
      $reactive(this).attach($scope);

      var idPdl = Session.get('idPdl');
      if(!idPdl||idPdl===null){
        $state.go('accueil');
      }

      this.subscribe('releves');

      $scope.pageName = 'Fiche relève';

      this.helpers({
        releves:()=>{
          return Releves.find({'idPdl':idPdl});
        }
      });

      this.ficheFacture=($index)=>{
        var idFacture = this.releves[$index].idFacture;
        Session.set('idFacture', idFacture);
        $state.go('fichefacture');
      }

    }
  }
});
