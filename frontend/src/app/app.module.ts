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
import { AgmCoreModule } from '@agm/core';


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
import { ShowMyTripsComponent } from './show-my-trip/show-my-trip.component';
import {HttpClientModule} from '@angular/common/http';
import { AddNewTripComponent } from './add-new-trip/add-new-trip.component';
import { HomeComponent } from './home/home.component';
import { TripComponent } from './show-my-trip/components/trip/trip.component';
import {TripService} from './services/trip.service';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { TripDetailsCommentComponent } from './trip-details/components/trip-details-comment/trip-details-comment.component';
import { GoogleMapComponent } from './trip-details/components/trip-details-comment/components/google-map/google-map.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SigninComponent,
    SignupComponent,
    FooterComponent,
    SigninDialogComponent,
    PasswordInputComponent,
    EmailInputComponent,
    ShowMyTripsComponent,
    AddNewTripComponent,
    HomeComponent,
    TripComponent,
    TripDetailsComponent,
    TripDetailsCommentComponent,
    GoogleMapComponent

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
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAOvdB3YtfXI-1GkU5i4q_mnjZYOlE8_YA'
    })
  ],
  entryComponents: [
    SigninDialogComponent
  ],
  providers: [TripService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
