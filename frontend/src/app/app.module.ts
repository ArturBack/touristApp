import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


import {AppComponent} from './app.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {SigninComponent} from './toolbar/components/signin/signin.component';
import {SignupComponent} from './toolbar/components/signup/signup.component';
import {FooterComponent} from './footer/footer.component';
import {SigninDialogComponent} from './signin-dialog/signin-dialog.component';
import {PasswordInputComponent} from './signin-dialog/components/password-input/password-input.component';
import {EmailInputComponent} from './signin-dialog/components/email-input/email-input.component';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SigninComponent,
    SignupComponent,
    FooterComponent,
    SigninDialogComponent,
    PasswordInputComponent,
    EmailInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    AppRoutingModule
  ],
  entryComponents: [
    SigninDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
