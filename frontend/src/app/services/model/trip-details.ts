export class TripDetail {
  private _id: number;
  private _name: string;
  private _description: string;
  private _dateFrom: string;
  private _dateTo: string;
  private _latitude = 0;
  private _longitude = 0;


  constructor(id: number, name: string, description: string, dateFrom: string, dateTo: string, latitude: number, longitude: number) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._dateFrom = dateFrom;
    this._dateTo = dateTo;
    this._latitude = latitude;
    this._longitude = longitude;
  }


  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get dateFrom(): string {
    return this._dateFrom;
  }

  get dateTo(): string {
    return this._dateTo;
  }

  get latitude(): number {
    return this._latitude;
  }

  get longitude(): number {
    return this._longitude;
  }
}
