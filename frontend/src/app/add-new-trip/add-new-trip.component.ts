import {Component} from '@angular/core';
import {TripService} from '../services/trip.service';
import {Trip} from '../services/model/trip';

@Component({
  selector: 'app-add-new-trip',
  templateUrl: './add-new-trip.component.html',
  styleUrls: ['./add-new-trip.component.css'],
})
export class AddNewTripComponent  {

  name: string;
  startDate: string;
  endDate: string;
  description: string;

  constructor(private tripService: TripService) {
  }

  onAddNewTrip() {
    console.log(this.description);
    const trip = new Trip(-1, this.name, this.startDate, this.endDate, this.description);
    this.tripService.addNewTrip(trip);
  }
}
