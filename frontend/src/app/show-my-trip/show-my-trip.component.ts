import {Component, OnInit} from '@angular/core';
import {TripService} from '../services/trip.service';
import {Trip} from '../services/model/trip';

@Component({
  selector: 'app-show-my-trip',
  templateUrl: './show-my-trip.component.html',
  styleUrls: ['./show-my-trip.component.css'],
})
export class ShowMyTripsComponent implements OnInit {

  private trips: Trip[];

  constructor(private tripService: TripService) {
  }

  ngOnInit() {
    this.tripService.getTrips()
      .subscribe(trips => {
        console.log(trips);
        this.trips = trips;
      });
  }
}
