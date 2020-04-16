import { TestBed } from '@angular/core/testing';

import { ClaServiceService } from './cla-service.service';

describe('ClaServiceService', () => {
  let service: ClaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
