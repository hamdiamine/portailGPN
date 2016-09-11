angular.module('portailGP').directive('leftsidebar', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/template/leftsidebar/leftsidebar.html',
    controllerAs: 'leftsidebarctrl',
    controller: function ($scope, $stateParams, $reactive, $state) {
      $reactive(this).attach($scope);

      this.pageIndex;

      this.helpers({

      });

      this.goToPage=(page)=>{
        switch(page) {
            case 'accueil':
                this.pageIndex = 1;
                break;
            case 'fichesynthese':
                this.pageIndex = 2;
                break;
            case 'ficheclient':
                this.pageIndex = 3;
                break;
            case 'fichecontrat':
                this.pageIndex = 4;
                break;
            case 'fichebranchement':
                this.pageIndex = 5;
                break;
            case 'fichereleves':
                this.pageIndex = 6;
                break;
            case 'historiques':
                this.pageIndex = 7;
                break;
            case 'statistiques':
                this.pageIndex = 8;
                break;
            case 'nouscontacter':
                this.pageIndex = 9;
                break;
            case 'compteclient':
                this.pageIndex = 10;
                break;
            default:
                this.pageIndex = -1;
        }
        $state.go(page);
      }

    }
  }
});
