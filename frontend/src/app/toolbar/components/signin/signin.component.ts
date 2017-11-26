import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {SigninDialogComponent} from '../../../signin-dialog/signin-dialog.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {

  title = 'Sign in';
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(SigninDialogComponent, {
      width: '240px',
      data: {title: this.title}
    });
   /* dialogRef.afterClosed().subscribe(result => {
    });*/
  }
}
