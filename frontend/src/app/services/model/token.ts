export class Token {

  private _id: number;
  private _loginDate: Date;
  private _login: string;


  constructor(id: number, loginDate: Date, login: string) {
    this._id = id;
    this._loginDate = loginDate;
    this._login = login;
  }


  get id(): number {
    return this._id;
  }

  get loginDate(): Date {
    return this._loginDate;
  }

  get login(): string {
    return this._login;
  }
}
