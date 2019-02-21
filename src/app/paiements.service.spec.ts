import { TestBed } from '@angular/core/testing';

import { PaiementsService } from './paiements.service';

describe('PaiementsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaiementsService = TestBed.get(PaiementsService);
    expect(service).toBeTruthy();
  });
});
