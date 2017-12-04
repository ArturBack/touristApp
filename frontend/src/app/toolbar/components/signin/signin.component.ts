import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {SigninDialogComponent} from '../../../signin-dialog/signin-dialog.component';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  title = 'Sign in';

  constructor(public dialog: MatDialog, private userService: UserService) {
  }

  private openDialog(): void {
    this.dialog.open(SigninDialogComponent, {
      width: '240px',
      data: {title: this.title}
    });
  }

  private isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }
}
