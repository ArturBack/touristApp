import {Injectable} from '@angular/core';
import {Trip} from './model/trip';
import {TripDetail} from './model/trip-details';
import {UserService} from './user.service';

@Injectable()
export class TripService {

  constructor(private userService: UserService) {
  }

  getTrips(): Trip[] {
    return [
      new Trip(1, 'Włochy', 'Nie ma na świecie miasta dorównującego Rzymowi bogactwem artystycznym, historycznym, czy architektonicznym.',
        new Date().toLocaleDateString(), new Date().toLocaleDateString()),
      new Trip(2, 'Hiszpania', 'Nie ma na świecie miasta dorównującego Rzymowi bogactwem artystycznym, historycznym, czy architektonicznym.',
        new Date().toLocaleDateString(), new Date().toLocaleDateString())
    ];
  }

  getDetailForTrip(id: number): TripDetail[] {
    return [
      new TripDetail(1, 'Wenecja', 'Nie ma na świecie miasta dorównującego Rzymowi bogactwem artystycznym, historycznym, czy architektonicznym.',
        new Date().toLocaleDateString(), new Date().toLocaleDateString(), 0, 12.4759007),
      new TripDetail(1, 'Rzym', 'Nie ma na świecie miasta dorównującego Rzymowi bogactwem artystycznym, historycznym, czy architektonicznym.',
        new Date().toLocaleDateString(), new Date().toLocaleDateString(), 45.4250084, 12.4759007)
    ];
  }

  addNewTrip(newTrip: Trip) {

  }

  addNewTripDetail(tripId: number, newTripDetail: TripDetail) {

  }


}
