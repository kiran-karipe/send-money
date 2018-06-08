import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveTypeCardComponent } from './receive-type-card.component';

describe('ReceiveTypeCardComponent', () => {
  let component: ReceiveTypeCardComponent;
  let fixture: ComponentFixture<ReceiveTypeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiveTypeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveTypeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
