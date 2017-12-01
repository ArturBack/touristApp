import {Component, Input, OnInit} from '@angular/core';
import {Trip} from '../../../services/model/trip';
import {Router} from '@angular/router';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css'],
})
export class TripComponent implements OnInit {
  @Input() trip: Trip;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  openDetails() {
    this.router.navigate(['/tripDetails/' + this.trip.id], {queryParams: {tripName: this.trip.name}});
  }
}
