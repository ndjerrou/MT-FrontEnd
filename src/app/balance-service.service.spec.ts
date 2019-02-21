import { TestBed } from '@angular/core/testing';

import { BalanceServiceService } from './balance-service.service';

describe('BalanceServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BalanceServiceService = TestBed.get(BalanceServiceService);
    expect(service).toBeTruthy();
  });
});
