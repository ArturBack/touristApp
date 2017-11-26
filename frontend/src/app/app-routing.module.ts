import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ShowMyTripComponent} from './show-my-trip/show-my-trip.component';

const routes: Routes = [
  { path: '', redirectTo: '/mytrips', pathMatch: 'full' },
  { path: 'mytrips', component: ShowMyTripComponent },
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
