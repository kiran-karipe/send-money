import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeToPayComponent } from './like-to-pay.component';

describe('LikeToPayComponent', () => {
  let component: LikeToPayComponent;
  let fixture: ComponentFixture<LikeToPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeToPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeToPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
