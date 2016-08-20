'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    // Redirect to 404 when route not found
    $urlRouterProvider.otherwise('not-found');

    // Home state routing
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'modules/core/views/home.client.view.html'
      })
      .state('not-found', {
        url: '/not-found',
        templateUrl: 'modules/core/views/404.client.view.html'
      })
       .state('contact', {
        url: '/contact',
        templateUrl: 'modules/core/views/contact-form.client.view.html'
      })
       .state('updates', {
        url: '/updates',
        templateUrl: 'modules/core/views/updates.client.view.html'
      })
       .state('projects', {
        url: '/projects',
        templateUrl: 'modules/core/views/projects.client.view.html'
      });
  }
]);
