'use strict';

describe('Service: marketingItOpsService', function () {

  // load the service's module
  beforeEach(module('webApp'));

  // instantiate service
  var marketingItOpsService;
  beforeEach(inject(function (_marketingItOpsService_) {
    marketingItOpsService = _marketingItOpsService_;
  }));

  it('should do something', function () {
    expect(!!marketingItOpsService).toBe(true);
  });

});
