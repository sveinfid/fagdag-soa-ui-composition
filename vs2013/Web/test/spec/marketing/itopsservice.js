'use strict';

describe('Service: itOpsService', function () {

  // load the service's module
  beforeEach(module('webApp'));

  // instantiate service
  var itOpsService;
  beforeEach(inject(function (_itOpsService_) {
    itOpsService = _itOpsService_;
  }));

  it('should do something', function () {
    expect(!!itOpsService).toBe(true);
  });

});
