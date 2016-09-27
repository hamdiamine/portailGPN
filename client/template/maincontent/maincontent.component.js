angular.module('portailGP').directive('maincontent', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/template/maincontent/maincontent.html',
    controllerAs: 'maincontentctrl',
    controller: function ($scope, $stateParams, $reactive) {
      $reactive(this).attach($scope);


      this.helpers({

      });

      /*
      $rootscope.setpagename=(page)=>{
        this.pagename=page;
      }
      */

    }
  }
});
