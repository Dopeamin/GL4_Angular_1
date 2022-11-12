import { TestBed } from '@angular/core/testing';

import { CvServiceService } from './cv-service.service';

describe('CvServiceService', () => {
  let service: CvServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
