angular.module('portailGP').directive('notifications', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/core/notifications/notifications.html',
    controllerAs: 'notificationsctrl',
    controller: function ($scope, $stateParams, $reactive) {
      $reactive(this).attach($scope);

      var idClient = Session.get('client').id;
      if(!idClient||idClient===null){
        $state.go('accueil');
      }

      this.subscribe('notifications');

      this.helpers({
        notifs:()=>{
          return Notifications.find({'idClient':idClient,'lu':'0'})
        }
      });

    }
  }
});
