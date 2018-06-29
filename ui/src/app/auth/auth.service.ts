import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private admin: boolean;

  constructor() {
    this.admin = false;
  }

  login() {
    this.admin = true;
  }

  logout() {
    this.admin = false;
  }

  get() {
    return this.admin;
  }
}
