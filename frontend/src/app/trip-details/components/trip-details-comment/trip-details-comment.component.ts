import {Component, Input, OnInit} from '@angular/core';
import {TripDetail} from '../../../services/model/trip-details';

@Component({
  selector: 'app-trip-details-comment',
  templateUrl: './trip-details-comment.component.html',
  styleUrls: ['./trip-details-comment.component.css'],
})
export class TripDetailsCommentComponent implements OnInit {
  @Input() tripDetail: TripDetail;
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
