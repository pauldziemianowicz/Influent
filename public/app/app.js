var app = angular.module('Influent',['ui.router'])

app.config(function($window, $httpProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
  delete $httpProvider.defaults.headers.common['X-Requested-With'];

  // $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('defaultHome', {
      url: '/',
      templateUrl: "templates/default_home.html",
      onEnter: function(){
        $window.location.reload();
      }
    })
    .state('about', {
      url: '/about',
      templateUrl: "templates/about.html"
    })
    .state('directoryMain', {
      url: '/directory',
      templateUrl: "templates/directory_main.html"
    })
    .state('directoryInfluencers', {
      url: '/directory/influencers',
      templateUrl: "templates/directory_influencers.html"
    })
    .state('directoryBrands', {
      url: '/directory/brands',
      templateUrl: "templates/directory_brands.html"
    })
    .state('influencerOverview', {
      url: '/dashboard/overview',
      templateUrl: "templates/influencer_dashboard_overview.html"
    })
    .state('influencerProfile', {
      url: '/dashboard/profile',
      templateUrl: "templates/influencer_dashboard_profile.html"
    })
    .state('influencerCommunication', {
      url: '/dashboard/communication',
      templateUrl: "templates/influencer_dashboard_communications.html"
    })
    .state('influencerMessages', {
      url: '/dashboard/communication/messages',
      templateUrl: "templates/influencer_dashboard_messages.html"
    })
    .state('influencerOffers', {
      url: '/dashboard/communication/offers',
      templateUrl: "templates/influencer_dashboard_offers.html"
    })
    .state('influencerJobs', {
      url: '/dashboard/jobs',
      templateUrl: "templates/influencer_dashboard_jobs.html"
    })

    // $locationProvider.html5Mode(true);
})
