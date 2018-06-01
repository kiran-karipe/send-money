import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashPickupCardComponent } from './cash-pickup-card.component';

describe('CashPickupCardComponent', () => {
  let component: CashPickupCardComponent;
  let fixture: ComponentFixture<CashPickupCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashPickupCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashPickupCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
