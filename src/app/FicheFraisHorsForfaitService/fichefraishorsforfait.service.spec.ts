import { TestBed } from '@angular/core/testing';

import { FichefraishorsforfaitService } from './fichefraishorsforfait.service';

describe('FichefraishorsforfaitService', () => {
  let service: FichefraishorsforfaitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FichefraishorsforfaitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
