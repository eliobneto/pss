import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tipo: number;

  constructor() {
    this.tipo = 3;
  }

  login(tipo: number) {
    this.tipo = tipo;
  }

  logout() {
    this.tipo = 3;
  }

  get() {
    return this.tipo;
  }
}
