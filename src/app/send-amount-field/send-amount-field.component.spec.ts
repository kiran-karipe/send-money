import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendAmountFieldComponent } from './send-amount-field.component';

describe('SendAmountFieldComponent', () => {
  let component: SendAmountFieldComponent;
  let fixture: ComponentFixture<SendAmountFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendAmountFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendAmountFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
