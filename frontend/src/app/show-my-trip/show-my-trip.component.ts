import {Component, OnInit} from '@angular/core';
import {TripService} from '../services/trip.service';
import {Trip} from '../services/trip';

@Component({
  selector: 'app-show-my-trip',
  templateUrl: './show-my-trip.component.html',
  styleUrls: ['./show-my-trip.component.css'],
})
export class ShowMyTripsComponent implements OnInit {

  trips: Trip[]

  constructor(private tripService: TripService) {
    this.trips = tripService.getTrips();
  }

  ngOnInit() {
  }

}
