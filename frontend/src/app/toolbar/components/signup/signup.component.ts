import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SigninDialogComponent} from '../../../signin-dialog/signin-dialog.component';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {

  title = 'Sign up';

  constructor(public dialog: MatDialog, private userService: UserService) {
  }

  private openDialog(): void {
    this.dialog.open(SigninDialogComponent, {
      width: '240px',
      data: {title: this.title}
    });
  }

  ngOnInit(): void {
  }

  private onButtonClick() {
    this.openDialog();
  }

  private isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }

}
