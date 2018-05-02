import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {funcionario} from './funcionario';

@Injectable()
export class FuncionarioService {
  private service = `${environment.apiUrl}funcionarios/`;

  constructor(private http: HttpClient, private router: Router) { }

  getFuns() {
    return this.http.get(this.service);
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
    return this.http.put(this.service + id, {cargo, id, telefone, cpf, email, nome, password, gerente});
  }

}