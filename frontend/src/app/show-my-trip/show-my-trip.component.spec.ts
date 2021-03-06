import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMyTripsComponent } from './show-my-trip.component';

describe('ShowMyTripsComponent', () => {
  let component: ShowMyTripsComponent;
  let fixture: ComponentFixture<ShowMyTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMyTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMyTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
