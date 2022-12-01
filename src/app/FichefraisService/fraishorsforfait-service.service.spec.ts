import { TestBed } from '@angular/core/testing';

import { FraishorsforfaitServiceService } from './fraishorsforfait-service.service';

describe('FraishorsforfaitServiceService', () => {
  let service: FraishorsforfaitServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FraishorsforfaitServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
