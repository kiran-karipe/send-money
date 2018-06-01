import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountPaymentCardComponent } from './bank-account-payment-card.component';

describe('BankAccountPaymentCardComponent', () => {
  let component: BankAccountPaymentCardComponent;
  let fixture: ComponentFixture<BankAccountPaymentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankAccountPaymentCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAccountPaymentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
