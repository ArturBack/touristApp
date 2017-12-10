import {Component} from '@angular/core';
import {TripService} from '../services/trip.service';
import {Trip} from '../services/model/trip';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-new-trip',
  templateUrl: './add-new-trip.component.html',
  styleUrls: ['./add-new-trip.component.css'],
})
export class AddNewTripComponent {

  private name = '';
  private startDate = '';
  private endDate = '';
  private description = '';

  constructor(private tripService: TripService, private router: Router) {
  }

  onAddNewTrip() {
    const trip = new Trip(-1, this.name, this.description, this.startDate, this.endDate);
    this.tripService.addNewTrip(trip)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['/mytrips']);
      });
  }

  isAddEnabled() {
    return this.name.length > 0 && this.startDate.length > 0 && this.endDate.length > 0;
  }
}
