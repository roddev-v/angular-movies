import {Injectable} from '@angular/core';

@Injectable()
export class SessionService {
  private AUTH_KEY = 'auth_key';

  setUser(user: any) {
    localStorage.setItem(this.AUTH_KEY, JSON.stringify(user));
  }

  getUser() {
    return JSON.parse(localStorage.getItem(this.AUTH_KEY));
  }

  hasUser() {
    const user = this.getUser();
    return user !== null;
  }

  clear() {
    localStorage.clear();
  }
}
