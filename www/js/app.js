// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
initalizeFirebase();

var app = angular.module('tfApp', ['ionic', 'firebase', 'tfApp.services', /*'tc.chartjs'by yre*/]);

app.factory("Auth", function($firebaseAuth){
  return $firebaseAuth();
});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider
    .otherwise('/');

  $stateProvider
  .state('login', {
    url: '/',
    templateUrl: 'templates/login.html',
    controller: 'loginController'

  })
  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/sign_up.html',
    controller: 'signupCtrl'
  })
  .state('dashboard', {
    url: '/dashboard',
    templateUrl: 'templates/dashboard.html',
    controller: 'dashboardCtrl'
  })
  .state('dashboard.home', {
    url: '/home',
    templateUrl: 'templates/event.html',
    controller: 'eventCtrl'
  })
  .state('dashboard.event', {
    url: '/event',
    templateUrl: 'templates/event.html',
    controller: 'eventCtrl'
  })
  .state('dashboard.eventDetail', {
    url: '/event/:eid',
    templateUrl: 'templates/eventD.html',
    controller: 'eventDCtrl'
  })
  .state('dashboard.team', {
    url: '/event/:eid/team/:tid',
    templateUrl: 'templates/team.html',
    controller: 'teamCtrl'        
  })
  .state('dashboard.notif', {
    url: '/notification',
    templateUrl: 'templates/notification.html',
    controller: 'notificationCtrl'        
  })
  .state('dashboard.request', {
    url: '/request',
    templateUrl: 'templates/request.html',
    controller: 'requestCtrl'       
  })
  .state('dashboard.profile', {
    url: '/profile/:uid',
    templateUrl: 'templates/profile.html',
    controller: 'profileCtrl'       
  })
});
