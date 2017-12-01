import {Injectable} from '@angular/core';
import {Token} from './model/token';

@Injectable()
export class UserService {

  constructor() {
  }

  logIn(user: Token) {

  }

  logOut() {

  }

  isLoggedIn(): boolean {
    return false;
  }
}
