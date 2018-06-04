import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmStateDropdownComponent } from './confirm-state-dropdown.component';

describe('ConfirmStateDropdownComponent', () => {
  let component: ConfirmStateDropdownComponent;
  let fixture: ComponentFixture<ConfirmStateDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmStateDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmStateDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
