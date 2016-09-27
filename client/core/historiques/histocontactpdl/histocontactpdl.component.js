angular.module('portailGP').directive('histocontactpdl', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/core/historiques/histocontactpdl/histocontactpdl.html',
    controllerAs: 'histocontactpdlctrl',
    controller: function ($scope, $stateParams, $reactive, $state) {
      $reactive(this).attach($scope);

      var idPdl = Session.get('idPdl');
      if(!idPdl||idPdl===null){
        $state.go('accueil');
      }

      this.subscribe('histocontactpdls');

      this.helpers({
        contacts:()=>{
          return HistoContactPdls.find({'idPdl':idPdl});
        }
      });

    }
  }
});
