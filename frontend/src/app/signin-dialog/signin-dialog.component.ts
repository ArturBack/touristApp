import {Component, Inject, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {UserService} from '../services/user.service';
import {Token} from '../services/model/token';

@Component({
  selector: 'app-signin-dialog',
  templateUrl: './signin-dialog.component.html',
  styleUrls: ['./signin-dialog.component.css'],
})
export class SigninDialogComponent {

  @ViewChild('email') emailView;
  @ViewChild('password') passwordView;

  constructor(private userService: UserService,
              private dialogRef: MatDialogRef<SigninDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  private onCancel() {
    this.dialogRef.close();
  }

  private isSignInDialog(): boolean {
    return this.data.title === 'Sign in';
  }

  private onSignIn() {
    console.log(this.emailView.email + ' ' + this.passwordView.password);
    if (this.isSignInDialog()) {
      this.login();
    } else {
      this.register();
    }
  }

  login() {
    this.userService.logIn(this.emailView.email, this.passwordView.password)
      .subscribe(
        data => {
          console.log(data);
          const token = <Token> data;
          this.onSuccess(token);
        },
        error => {
          console.log(error);
        }
      );

  }

  register() {
    this.userService.register(this.emailView.email, this.passwordView.password)
      .subscribe(
        data => {
          console.log(data);
          const token = <Token> data;
          this.onSuccess(token);
        },
        error => {
          console.log(error);
        }
      );
  }

  onSuccess(token: Token) {
    this.userService.storeToken(token);
    this.dialogRef.close();
  }
}
