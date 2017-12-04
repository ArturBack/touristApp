import {Component} from '@angular/core';
import {TripService} from '../services/trip.service';
import {TripDetail} from '../services/model/trip-details';

@Component({
  selector: 'app-add-new-comment',
  templateUrl: './add-new-comment.component.html',
  styleUrls: ['./add-new-comment.component.css'],
})
export class AddNewCommentComponent {

  name: string;
  startDate: string;
  endDate: string;
  description: string;
  latitude: number;
  longitude: number;

  constructor(private tripService: TripService) { }

  onGeoLocationClick() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    });
  }

  onAddDetail() {
    const tripDetail = new TripDetail(-1, this.name, this.description,  this.startDate, this.endDate, this.latitude, this.longitude);
    this.tripService.addNewTripDetail(1, null);
  }
}
