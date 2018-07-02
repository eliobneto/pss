import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Cliente} from './cliente';

@Injectable()
export class ClienteService {
  private service = 'hola';

  constructor(private http: HttpClient, private router: Router) { }

  getClientes() {
    return this.http.get<any>('assets/demo/data/cliente.json').toPromise()
      .then(res => <Cliente[]> res.data)
      .then(data => data);

  }

  excluir(id: string) {
    return this.http.delete(this.service + id);
  }

  getFun(id: string) {
    return this.http.get<Cliente>(this.service + id);
  }

  criarFun(clien: Cliente) {
    const cargo = clien.cargo;
    const telefone = clien.telefone;
    const cpf = clien.cpf;
    const email = clien.email;
    const gerente = clien.gerente;
    const password = clien.password;
    const nome = clien.nome;
    return this.http.post(this.service, {cargo, telefone, cpf, email, nome, password, gerente});
  }

  updat(id: string, clien: Cliente) {
    const cargo = clien.cargo;
    const telefone = clien.telefone;
    const cpf = clien.cpf;
    const email = clien.email;
    const gerente = clien.gerente;
    const password = clien.password;
    const nome = clien.nome;
    if(password) {
      return this.http.put(this.service + id, {cargo, id, telefone, cpf, email, nome, password, gerente});
    } else {
      return this.http.put(this.service + id, {cargo, id, telefone, cpf, email, nome, gerente});
    }
  }

}
