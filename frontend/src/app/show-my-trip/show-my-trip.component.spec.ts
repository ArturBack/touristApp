import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMyTripComponent } from './show-my-trip.component';

describe('ShowMyTripComponent', () => {
  let component: ShowMyTripComponent;
  let fixture: ComponentFixture<ShowMyTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMyTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMyTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
