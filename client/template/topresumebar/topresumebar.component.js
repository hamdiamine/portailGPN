angular.module('portailGP').directive('topresumebar', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/template/topresumebar/topresumebar.html',
    controllerAs: 'topresumebarctrl',
    controller: function ($scope, $stateParams, $reactive) {
      $reactive(this).attach($scope);
      this.subscribe('impayeesClient', $stateParams.clientId);
      this.subscribe('notifications', $stateParams.clientId);
      this.subscribe('reclamCliEnCours', $stateParams.clientId);
      this.subscribe('reclamCliAnnul', $stateParams.clientId);

      this.helpers({
         impayeesCliCount: () => {
           return Counts.get('impayeesCliCount');
         },
         notifCliCount: () => {
           return Counts.get('notifCliCount');
         },
         reclamCliEnCoursCount: () => {
           return Counts.get('reclamCliEnCoursCount');
         },
         reclamCliAnnulCount: () => {
           return Counts.get('reclamCliAnnulCount');
         }
      });

    }
  }
});
