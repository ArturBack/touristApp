export class TripDetail {
  private _id: number;
  private _name: String;
  private _description: String;
  private _dateFrom: String;
  private _dateTo: String;
  private _latitude = 0;
  private _longitude = 0;


  constructor(id: number, name: String, description: String, dateFrom: String, dateTo: String, latitude: number, longitude: number) {
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

  get name(): String {
    return this._name;
  }

  get description(): String {
    return this._description;
  }

  get dateFrom(): String {
    return this._dateFrom;
  }

  get dateTo(): String {
    return this._dateTo;
  }

  get latitude(): number {
    return this._latitude;
  }

  get longitude(): number {
    return this._longitude;
  }
}
