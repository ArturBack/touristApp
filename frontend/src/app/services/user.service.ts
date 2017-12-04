import {Injectable} from '@angular/core';
import {Token} from './model/token';
import {LocalStorageService} from 'ngx-webstorage';

@Injectable()
export class UserService {

  private USER = 'USER';

  constructor(private storage: LocalStorageService) {
  }

  public logIn(email: string, password: string) {
    // const token = new Token(1, new Date(), 'user');
    // this.storage.store(this.USER, token);
  }

  public isLoggedIn(): boolean {
    const user = this.storage.retrieve(this.USER);
    return user != null;
  }

  public logout() {
    this.storage.clear(this.USER);
  }

  public register(email: string, password: string) {

  }
}
