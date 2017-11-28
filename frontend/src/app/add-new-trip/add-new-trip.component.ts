import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-new-trip',
  templateUrl: './add-new-trip.component.html',
  styleUrls: ['./add-new-trip.component.css'],
})
export class AddNewTripComponent implements OnInit {
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;

  constructor() {
  }

  ngOnInit() {
  }

}
