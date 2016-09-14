angular.module('portailGP').directive('accueil', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/accueil/accueil.html',
    controllerAs: 'accueilctrl',
    controller: function ($scope, $stateParams, $reactive) {
      $reactive(this).attach($scope);

      var idClient = Session.get('client')._id

      this.subscribe('clients');


      this.helpers({
        client: () => {
          var c = Clients.findOne({'_id':idClient});
          return c;
        }
      });

    }
  }
});
