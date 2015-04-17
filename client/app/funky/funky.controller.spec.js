'use strict';

describe('Controller: FunkyCtrl', function () {

  // load the controller's module
  beforeEach(module('pabloApp'));

  var FunkyCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FunkyCtrl = $controller('FunkyCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
