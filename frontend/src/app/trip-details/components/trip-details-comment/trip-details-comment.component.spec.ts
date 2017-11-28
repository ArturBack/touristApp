import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripDetailsCommentComponent } from './trip-details-comment.component';

describe('TripDetailsCommentComponent', () => {
  let component: TripDetailsCommentComponent;
  let fixture: ComponentFixture<TripDetailsCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripDetailsCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripDetailsCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
