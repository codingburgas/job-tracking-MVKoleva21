import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user: User | null = null;

  login(email: string, password: string): boolean {
    if (email && password) {
      this._user = { name: 'John Doe', email };
      return true;
    }
    return false;
  }

  register(fullName: string, email: string, password: string): boolean {
    this._user = { name: fullName, email };
    return true;
  }

  logout(): void {
    this._user = null;
  }

  get user(): User | null {
    return this._user;
  }

  isAuthenticated(): boolean {
    return !!this._user;
  }
}
