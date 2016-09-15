angular.module('portailGP').directive('notifications', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/notifications/notifications.html',
    controllerAs: 'notificationsctrl',
    controller: function ($scope, $stateParams, $reactive) {
      $reactive(this).attach($scope);

      this.helpers({

      });

    }
  }
});
