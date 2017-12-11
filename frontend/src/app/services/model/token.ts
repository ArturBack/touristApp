export class Token {

  private _id: number;
  private _login: string;
  private _loginDate: Date;



  constructor(id: number, login: string , loginDate: Date) {
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
