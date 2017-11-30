import { Component, OnInit } from '@angular/core';
import {TripService} from '../services/trip.service';

@Component({
  selector: 'app-add-new-comment',
  templateUrl: './add-new-comment.component.html',
  styleUrls: ['./add-new-comment.component.css'],
})
export class AddNewCommentComponent implements OnInit {

  constructor(private tripService: TripService) { }

  ngOnInit() {
  }

  onGeoLocationClick() {

  }

  onAddDetail() {
    this.tripService.addNewTripDetail(1, null);

  }
}
