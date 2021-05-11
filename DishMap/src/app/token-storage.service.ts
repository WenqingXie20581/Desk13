import { Injectable } from '@angular/core';
import { User } from './models/User';
import { UserInfo } from './models/UserInfo';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const USER_INFO_KEY = 'root2';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): User {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }

  public getUserInfo(): UserInfo {
    return JSON.parse(sessionStorage.getItem(USER_INFO_KEY));
  }
}
