angular.module('portailGP').directive('login', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/login/login.html',
    controllerAs: 'loginctrl',
    controller: function ($scope, $stateParams, $reactive, $state) {
      $reactive(this).attach($scope);
      $scope.compte = null;
      $scope.login = true;

      this.helpers({

      });

      this.authentification=()=>{
        if(!this.user||this.user===null||!this.mdp||this.mdp===null){
          toastr.error("Login et mot de passe sont obligatiores");
          return;
        }
        Meteor.call('authentification', this.user, this.mdp, function(error, data){
          if(error){
            toastr.error(error.error);
          }else {
            this.user = null;
            this.mdp = null;
            $scope.compte = {user :data.name};
            Session.set('client', data);
            $scope.login = false;
            $state.go('accueil');
          }
        });
      }

    }
  }
});
