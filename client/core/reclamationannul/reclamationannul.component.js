angular.module('portailGP').directive('reclamationannul', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/core/reclamationannul/reclamationannul.html',
    controllerAs: 'reclamationannulctrl',
    controller: function ($scope, $stateParams, $reactive) {
      $reactive(this).attach($scope);

      var idClient = Session.get('client').id;
      if(!idClient||idClient===null){
        $state.go('accueil');
      }

      this.subscribe('reclamations');

      this.helpers({
        reclams:()=>{
          return HistoReclamations.find({'idClient':idClient,'etat':'-1'})
        }
      });

    }
  }
});
