import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {funcionario} from './funcionario';

@Injectable()
export class FuncionarioService {
  private service = `${environment.apiUrl}funcionario`;

  constructor(private http: HttpClient, private router: Router) { }

  getFuns() {
    return this.http.get(this.service);
  }

  excluir(id: string){
    return this.http.delete(this.service)
  }

  getFun(id: string){
    return this.http.get(this.service + id)
  }

  criarFun(func: funcionario) {
    return this.http.post(this.service, {func});
  }

  updat(id: string, cargo: string, cpf: string, email: string, gerente: boolean, nome: string, senha: string, celular: string){
    return this.http.put(this.service + id, {cargo, cpf, email, gerente, senha, nome, celular})
  }

}
