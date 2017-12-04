export class Trip {
  private _id: number;
  private _name: String;
  private _description: String;
  private _dateFrom: String;
  private _dateTo: String;


  constructor(id: number, name: String, description: String, dateFrom: String, dateTo: String) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._dateFrom = dateFrom;
    this._dateTo = dateTo;
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
}
