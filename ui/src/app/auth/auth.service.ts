import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tipo: number;
  private gerente = false;
  private cliente = false;
  private admin = false;

  constructor() {
    this.tipo = 4;
  }

  login(tipo: number) {
    this.tipo = tipo;
    if (tipo === 1) {
      this.gerente = true;
      this.admin = true;
    } else if (tipo === 2) {
      this.admin = true;
    } else if (tipo === 3) {
      this.cliente = true;
    }
  }

  logout() {
    this.tipo = 4;
    this.admin = this.cliente = this.gerente = false;
  }

  temPermissao(perm: string) {
    if (perm === 'admin') {
      return this.admin;
    } else if (perm === 'gerente') {
      return this.gerente;
    } else if (perm === 'cliente') {
      return this.cliente;
    } else {
      return false;
    }
  }

  get() {
    return this.tipo;
  }
}
