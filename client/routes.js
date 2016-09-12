angular.module('portailGP')
  .config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('accueil', {
        url: '/accueil',
        template: '<accueil></accueil>'
      })
      .state('login', {
        url: '/login',
        template: ''
      })
      .state('fichesynthese', {
        url: '/fichesynthese',
        template: '<fichesynthese></fichesynthese>'
      })
      .state('ficheclient', {
        url: '/ficheclient',
        template: '<ficheclient></ficheclient>'
      })
      .state('compteclient', {
        url: '/compteclient',
        template: '<compteclient></compteclient>'
      })
      .state('fichereleves', {
        url: '/fichereleves',
        template: '<fichereleves></fichereleves>'
      })
      .state('fichefacture', {
        url: '/fichefacture',
        template: '<fichefacture></fichefacture>'
      })
      .state('historiques', {
        url: '/historiques',
        template: '<historiques></historiques>'
      });

    $urlRouterProvider.otherwise("/login");
  });
