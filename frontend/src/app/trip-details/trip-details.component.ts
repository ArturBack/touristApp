import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TripDetail} from '../services/model/trip-details';
import {TripService} from '../services/trip.service';


@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css'],
})
export class TripDetailsComponent implements OnInit {

  private tripId: number;
  private tripName: String;
  private tripDetails: TripDetail[];

  constructor(private route: ActivatedRoute, private router: Router, private tripService: TripService) {
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.tripName = params.tripName;
      });
    this.tripId = +this.route.snapshot.paramMap.get('id');
    this.getTripDetails(this.tripId);
  }

  getTripDetails(tripId: number) {
    this.tripService.getDetailForTrip(tripId)
      .subscribe(tripDetails => {
        console.log(tripDetails);
        this.tripDetails = tripDetails;
      });
  }

  addNewPoint() {
    this.router.navigate(['/addTripDetail/' + this.tripId], {queryParams: {tripName: this.tripName}});
  }
}
