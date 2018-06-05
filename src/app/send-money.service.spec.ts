import { TestBed, inject } from '@angular/core/testing';

import { SendMoneyService } from './send-money.service';

describe('SendMoneyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendMoneyService]
    });
  });

  it('should be created', inject([SendMoneyService], (service: SendMoneyService) => {
    expect(service).toBeTruthy();
  }));
});
