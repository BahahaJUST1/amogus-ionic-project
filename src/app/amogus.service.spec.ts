import { TestBed } from '@angular/core/testing';

import { AmogusService } from './amogus.service';

describe('AmogusService', () => {
  let service: AmogusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmogusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
