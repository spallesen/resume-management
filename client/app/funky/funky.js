'use strict';

angular.module('pabloApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/funky', {
        templateUrl: 'app/funky/funky.html',
        controller: 'FunkyCtrl'
      });
  });
