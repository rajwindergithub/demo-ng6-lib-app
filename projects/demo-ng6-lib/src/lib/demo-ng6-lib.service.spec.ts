import { TestBed } from '@angular/core/testing';

import { DemoNg6LibService } from './demo-ng6-lib.service';

describe('DemoNg6LibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemoNg6LibService = TestBed.get(DemoNg6LibService);
    expect(service).toBeTruthy();
  });
});
