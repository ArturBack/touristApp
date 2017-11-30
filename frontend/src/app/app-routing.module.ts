import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ShowMyTripsComponent} from './show-my-trip/show-my-trip.component';
import {AddNewTripComponent} from './add-new-trip/add-new-trip.component';
import {HomeComponent} from './home/home.component';
import {TripDetailsComponent} from './trip-details/trip-details.component';
import {AddNewCommentComponent} from './add-new-comment/add-new-comment.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'mytrips', component: ShowMyTripsComponent },
  { path: 'addtrip', component: AddNewTripComponent },
  { path: 'tripDetails/:id', component: TripDetailsComponent },
  { path: 'addTripDetail/:id', component: AddNewCommentComponent },


];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
