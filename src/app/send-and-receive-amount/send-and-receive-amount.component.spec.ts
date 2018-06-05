import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendAndReceiveAmountComponent } from './send-and-receive-amount.component';

describe('SendAndReceiveAmountComponent', () => {
  let component: SendAndReceiveAmountComponent;
  let fixture: ComponentFixture<SendAndReceiveAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendAndReceiveAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendAndReceiveAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
