import {Component, OnInit} from '@angular/core';
import {TripService} from '../services/trip.service';

@Component({
  selector: 'app-add-new-trip',
  templateUrl: './add-new-trip.component.html',
  styleUrls: ['./add-new-trip.component.css'],
})
export class AddNewTripComponent implements OnInit {
  constructor(private tripService: TripService) {
  }

  ngOnInit() {
  }

  onAddNewTrip() {
    this.tripService.addNewTrip(null);
  }
}
