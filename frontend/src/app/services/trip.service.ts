import {Injectable} from '@angular/core';
import {Trip} from './trip';

@Injectable()
export class TripService {

  constructor() {
  }

  getTrips(): Trip[] {
    return [
      {
        id: 1,
        name: 'Włochy',
        description: 'Nie ma na świecie miasta dorównującego Rzymowi bogactwem artystycznym, historycznym, czy architektonicznym.',
        dateFrom: new Date().toLocaleDateString(),
        dateTo: new Date().toLocaleDateString()
      },
      {
        id: 2,
        name: 'Włochy',
        description: 'Nie ma na świecie miasta dorównującego Rzymowi bogactwem artystycznym, historycznym, czy architektonicznym. Miasto jednoczące skrajności, stojące niegdyś na czele świata pogańskiego, a dziś będące centrum chrześcijaństwa. Przyciąga ludzi z całego świata, chcących odkrywać potęgę i chwałę tego miasta. Piękno Rzymu zaklęte jest w budynkach i obrazach, fascynujących i magicznych miejscach, które każą wracać do Wiecznego Miasta.',
        dateFrom: new Date().toLocaleDateString(),
        dateTo: new Date().toLocaleDateString()
      },
      {
        id: 3,
        name: 'Włochy',
        description: 'Nie ma na świecie miasta dorównującego Rzymowi bogactwem artystycznym, historycznym, czy architektonicznym.',
        dateFrom: new Date().toLocaleDateString(),
        dateTo: new Date().toLocaleDateString()
      }
    ];
  }

}
