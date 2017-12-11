import {Injectable} from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Token} from './model/token';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class UserService {

  private USER = 'USER';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json;' })
  };

  constructor(private http: HttpClient, private storage: LocalStorageService) {
  }

  public logIn(email: string, password: string): Observable<Token> {
    const url = 'http://localhost:8080/logInUser';
    const body = {
      login: email,
      password: password
    };
    return this.http.post<Token>(url, body, this.httpOptions);
  }

  public isLoggedIn(): boolean {
    const user = <Token> this.storage.retrieve(this.USER);
    return user != null && user.id !== -1;
  }

  public getUserToken(): Token {
    return this.storage.retrieve(this.USER);
  }

  public logout() {
    this.storage.clear(this.USER);
  }

  public register(email: string, password: string): Observable<Token> {
    const url = 'http://localhost:8080/addUser';
    const body = {
      login: email,
      password: password
    };
    return this.http.post<Token>(url, body, this.httpOptions);
  }
  storeToken(token: Token) {
    this.storage.store(this.USER, token);
  }
}
