import {Injectable} from '@angular/core';
import {Trip} from './model/trip';
import {TripDetail} from './model/trip-details';
import {UserService} from './user.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Token} from './model/token';

@Injectable()
export class TripService {


  constructor(private userService: UserService, private http: HttpClient) {
  }

  getTrips(): Observable<Trip[]> {
    const token: Token = this.userService.getUserToken();
    let params = new HttpParams();
    params = params.set('userId', token.id.toString());

    const url = 'http://localhost:8080/getUserTrips';
    return this.http.get<Trip[]>(url, {params: params});
  }

  getDetailForTrip(id: number): Observable<TripDetail[]> {
    let params = new HttpParams();
    params = params.set('tripID', id.toString());

    const url = 'http://localhost:8080/getTripDetails';
    return this.http.get<TripDetail[]>(url, {params: params});
  }

  addNewTrip(newTrip: Trip): Observable<string> {
    const token: Token = this.userService.getUserToken();

    let params = new HttpParams();
    params = params.set('userId', token.id.toString());
    params = params.set('name', newTrip.name);
    params = params.set('description', newTrip.description);
    params = params.set('dateFrom', newTrip.dateFrom);
    params = params.set('dateTo', newTrip.dateTo);

    const url = 'http://localhost:8080/addTrip';
    return this.http.get<string>(url, {params: params});
  }

  addNewTripDetail(tripId: number, newTripDetail: TripDetail): Observable<string> {
    let params = new HttpParams();
    params = params.set('tripId', tripId.toString());
    params = params.set('name', newTripDetail.name);
    params = params.set('description', newTripDetail.description);
    params = params.set('dateFrom', newTripDetail.dateFrom);
    params = params.set('dateTo', newTripDetail.dateTo);
    params = params.set('latitude', newTripDetail.latitude.toString());
    params = params.set('longitude', newTripDetail.longitude.toString());

    const url = 'http://localhost:8080/addTripDetail';
    return this.http.get<string>(url, {params: params});
  }
}
