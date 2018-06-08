import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeToPayCardComponent } from './like-to-pay-card.component';

describe('LikeToPayCardComponent', () => {
  let component: LikeToPayCardComponent;
  let fixture: ComponentFixture<LikeToPayCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeToPayCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeToPayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
