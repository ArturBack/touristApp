import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TripDetail} from '../services/trip-details';
import {TripService} from '../services/trip.service';


@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css'],
})
export class TripDetailsComponent implements OnInit {

  tripId: number;
  tripName: String;
  tripDetails: TripDetail[];

  constructor(private route: ActivatedRoute, private router: Router, private tripService: TripService) {
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.tripName = params.tripName;
      });
    this.tripId = +this.route.snapshot.paramMap.get('id');
    this.tripDetails = this.tripService.getDetailForTrip(this.tripId);
  }

  addNewPoint() {
    this.router.navigate(['/addTripDetail/' + this.tripId]);
  }
}
