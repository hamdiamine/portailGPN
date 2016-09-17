angular.module('portailGP').directive('reclamationencours', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/core/reclamationencours/reclamationencours.html',
    controllerAs: 'reclamationencoursctrl',
    controller: function ($scope, $stateParams, $reactive, $state) {
      $reactive(this).attach($scope);

      var idClient = Session.get('client').id;
      if(!idClient||idClient===null){
        $state.go('accueil');
      }

      this.subscribe('reclamations');

      this.helpers({
        reclams:()=>{
          return HistoReclamations.find({'idClient':idClient,'etat':'1'})
        }
      });

    }
  }
});
