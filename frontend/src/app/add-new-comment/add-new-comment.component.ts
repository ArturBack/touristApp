import {Component, OnInit} from '@angular/core';
import {TripService} from '../services/trip.service';
import {TripDetail} from '../services/model/trip-details';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-new-comment',
  templateUrl: './add-new-comment.component.html',
  styleUrls: ['./add-new-comment.component.css'],
})
export class AddNewCommentComponent implements OnInit {

  private tripId: number;
  private name = '';
  private startDate = '';
  private endDate = '';
  private description = '';
  private latitude = 0.0;
  private longitude = 0.0;
  private tripName: string;

  constructor(private tripService: TripService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.tripName = params.tripName;
      });
    this.tripId = +this.route.snapshot.paramMap.get('id');
  }

  isAddEnabled() {
    return this.name.length > 0 && this.startDate.length > 0 && this.endDate.length > 0;
  }

  onGeoLocationClick() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    });
  }

  onAddDetail() {
    const tripDetail = new TripDetail(-1, this.name, this.description, this.startDate, this.endDate, this.latitude, this.longitude);
    this.tripService.addNewTripDetail(this.tripId, tripDetail)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['/tripDetails/' + this.tripId], {queryParams: {tripName: this.tripName}});
      });
  }
}
