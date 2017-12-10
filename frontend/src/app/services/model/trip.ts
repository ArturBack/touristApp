export class Trip {
  private _id: number;
  private _name: string;
  private _description: string;
  private _dateFrom: string;
  private _dateTo: string;


  constructor(id: number, name: string, description: string, dateFrom: string, dateTo: string) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._dateFrom = dateFrom;
    this._dateTo = dateTo;
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
}
