import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditDebitPaymentCardComponent } from './credit-debit-payment-card.component';

describe('CreditDebitPaymentCardComponent', () => {
  let component: CreditDebitPaymentCardComponent;
  let fixture: ComponentFixture<CreditDebitPaymentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditDebitPaymentCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditDebitPaymentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
