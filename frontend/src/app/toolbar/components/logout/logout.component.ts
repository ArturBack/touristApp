import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {

  title = 'Logout';

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  private isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }

  onButtonClick() {
    this.userService.logout();
    this.router.navigate(['/home/']);
  }


}
