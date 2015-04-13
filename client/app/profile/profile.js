'use strict';

angular.module('pabloApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/profile', {
        templateUrl: 'app/profile/profile.html',
        controller: 'ProfileCtrl'
      });
  });
