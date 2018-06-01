import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountCardComponent } from './bank-account-card.component';

describe('BankAccountCardComponent', () => {
  let component: BankAccountCardComponent;
  let fixture: ComponentFixture<BankAccountCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankAccountCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAccountCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
