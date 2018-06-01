import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayInStoreCardComponent } from './pay-in-store-card.component';

describe('PayInStoreCardComponent', () => {
  let component: PayInStoreCardComponent;
  let fixture: ComponentFixture<PayInStoreCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayInStoreCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayInStoreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
