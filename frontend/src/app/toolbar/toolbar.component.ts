import {Component, OnInit} from '@angular/core';
import {MatIconRegistry, MatSidenav} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {

  private menuIconName = 'hamburger';
  private menuIconPath = 'assets/images/hamburger.svg';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private router: Router, private userService: UserService) {
    iconRegistry.addSvgIcon(this.menuIconName, sanitizer.bypassSecurityTrustResourceUrl(this.menuIconPath));
  }

  ngOnInit() {
  }

  isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }

  onShowMyTripsClick(sidenav: MatSidenav) {
    sidenav.toggle();
    this.router.navigate(['/mytrips']);

  }

  onAddNewTripClick(sidenav: MatSidenav) {
    sidenav.toggle();
    this.router.navigate(['/addtrip']);
  }
}
