angular.module('portailGP').directive('histoequipements', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/core/historiques/histoequipements/histoequipements.html',
    controllerAs: 'histoequipementsctrl',
    controller: function ($scope, $stateParams, $reactive, $state) {
      $reactive(this).attach($scope);

      var idPdl = Session.get('idPdl');
      if(!idPdl||idPdl===null){
        $state.go('accueil');
      }

      this.subscribe('histoequipements');

      this.helpers({
        histoequips:()=>{
          return HistoEquipements.find({'idPdl':idPdl});
        }
      });

    }
  }
});
