import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TripDetails} from '../services/trip-details';
import {TripService} from '../services/trip.service';


@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css'],
})
export class TripDetailsComponent implements OnInit {

  tripName: String;
  tripDetails: TripDetails[];

  constructor(private route: ActivatedRoute, private tripService: TripService) {
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.tripName = params.tripName;
      });
    const id = +this.route.snapshot.paramMap.get('id');
    this.tripDetails = this.tripService.getDetailForTrip(id);
  }

  addNewPoint() {

  }
}
