import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Cliente} from './cliente';

@Injectable()
export class ClienteService {
  private service = 'hola';

  constructor(private http: HttpClient, private router: Router) { }

  getFuns() {
    return this.http.get<any>('assets/demo/data/Cliente.json').toPromise()
      .then(res => <cliente[]> res.data)
      .then(data => data);

  }

  excluir(id: string) {
    return this.http.delete(this.service + id);
  }

  getFun(id: string) {
    return this.http.get<cliente>(this.service + id);
  }

  criarFun(clien: cliente) {
    const cargo = func.cargo;
    const telefone = func.telefone;
    const cpf = func.cpf;
    const email = func.email;
    const gerente = func.gerente;
    const password = func.password;
    const nome = func.nome;
    return this.http.post(this.service, {cargo, telefone, cpf, email, nome, password, gerente});
  }

  updat(id: string, clien: cliente) {
    const cargo = func.cargo;
    const telefone = func.telefone;
    const cpf = func.cpf;
    const email = func.email;
    const gerente = func.gerente;
    const password = func.password;
    const nome = func.nome;
    if(password) {
      return this.http.put(this.service + id, {cargo, id, telefone, cpf, email, nome, password, gerente});
    } else {
      return this.http.put(this.service + id, {cargo, id, telefone, cpf, email, nome, gerente});
    }
  }

}
