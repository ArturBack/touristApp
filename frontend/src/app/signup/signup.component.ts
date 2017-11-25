import {Component, ViewEncapsulation} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SigninDialogComponent} from '../signin-dialog/signin-dialog.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SignupComponent  {

  title = 'Sign up';

  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    this.dialog.open(SigninDialogComponent, {
      width: '240px',
      data: {title: this.title}
    });
  }
}
