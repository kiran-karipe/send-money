import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendAndRecieveAmountFieldComponent } from './send-and-recieve-amount-field.component';

describe('SendAndRecieveAmountFieldComponent', () => {
  let component: SendAndRecieveAmountFieldComponent;
  let fixture: ComponentFixture<SendAndRecieveAmountFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendAndRecieveAmountFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendAndRecieveAmountFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
