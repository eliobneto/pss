import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {funcionario} from './funcionario';
import {Car} from "../../demo/domain/car";

@Injectable()
export class FuncionarioService {
  private service = 'hola';

  constructor(private http: HttpClient, private router: Router) { }

  getFuns() {
    return this.http.get<any>('assets/demo/data/Funcionario.json').toPromise()
      .then(res => <funcionario[]> res.data)
      .then(data => data);

  }

  excluir(id: string) {
    return this.http.delete(this.service + id);
  }

  getFun(id: string) {
    return this.http.get<funcionario>(this.service + id);
  }

  criarFun(func: funcionario) {
    const cargo = func.cargo;
    const telefone = func.telefone;
    const cpf = func.cpf;
    const email = func.email;
    const gerente = func.gerente;
    const password = func.password;
    const nome = func.nome;
    return this.http.post(this.service, {cargo, telefone, cpf, email, nome, password, gerente});
  }

  updat(id: string, func: funcionario) {
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
