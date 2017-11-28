import {Component, Input, OnInit} from '@angular/core';
import {TripDetails} from '../../../services/trip-details';

@Component({
  selector: 'app-trip-details-comment',
  templateUrl: './trip-details-comment.component.html',
  styleUrls: ['./trip-details-comment.component.css'],
})
export class TripDetailsCommentComponent implements OnInit {
  @Input() tripDetail: TripDetails;
  coordinateSet = false;
  mapButtonName = 'Show on map';

  constructor() {
  }

  ngOnInit() {
  }

  showOnMap() {
    if (!this.coordinateSet === true && this.tripDetail.latitude !== 0 && this.tripDetail.longitude !== 0) {
      this.showMap();
    } else if (this.coordinateSet === true) {
      this.hideMap();
    }
  }

  hideMap() {
    this.coordinateSet = false;
    this.mapButtonName = 'Show on map';

  }

  showMap() {
    this.coordinateSet = true;
    this.mapButtonName = 'Hide map';

  }
}
