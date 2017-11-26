import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {

  menuIconName = 'hamburger';
  menuIconPath = 'assets/images/hamburger.svg';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(this.menuIconName, sanitizer.bypassSecurityTrustResourceUrl(this.menuIconPath));
  }

  ngOnInit() {
  }

  onShowMyTripsClick() {
  }

  onAddNewTripClick() {
  }
}
