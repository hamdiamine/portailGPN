angular.module('portailGP').directive('fichesynthese', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/core/fichesynthese/fichesynthese.html',
    controllerAs: 'fichesynthesectrl',
    controller: function ($scope, $stateParams, $reactive, $state) {
      $reactive(this).attach($scope);

      var idPdl = Session.get('idPdl');

      if(!idPdl||idPdl===null){
        $state.go('accueil');
      }

      this.subscribe('abonnements');
      this.subscribe('pointDeComptages');

      $scope.pageName = 'Fiche de synthèse';

      this.helpers({
        abn:()=>{
          var a = Abonnements.findOne({'idPdl':idPdl});
          return a;
        },
        pdl:()=>{
          var p = PointsDeComptages.findOne({'id':idPdl});
          return p;
        }
      });

    }
  }
});
