import {Injectable} from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Token} from './model/token';


@Injectable()
export class UserService {

  private USER = 'USER';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private storage: LocalStorageService) {
  }

  public logIn(email: string, password: string) {
    // const token = new Token(1, new Date(), 'user');
    // this.storage.store(this.USER, token);
  }

  public isLoggedIn(): boolean {
    const user = this.storage.retrieve(this.USER);
    return user != null;
  }

  public getUserToken(): Token {
    return this.storage.retrieve(this.USER);
  }

  public logout() {
    this.storage.clear(this.USER);
  }

  public register(email: string, password: string) {
    const body = {
      login: email,
      password: password
    };

    this.http.post('http://localhost:8080/addUser', body, this.httpOptions)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
    );
  }
}
