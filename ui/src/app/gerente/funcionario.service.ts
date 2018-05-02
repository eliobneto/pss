import {Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class FuncionarioService {
  private service = `${environment.apiUrl}funcionarios`;

  constructor(private http: HttpClient, private router: Router) { }

  getFuns() {
    return this.http.get(this.service);
  }

  excluir(id: string){
    return this.http.delete(this.service)
  }

  getFun(id: string){
    return this.http.get(this.service+id)
  }

  criarFun(cargo: string, csenha: string, cpf: string, email: string, gerente: boolean, nome: string, senha: string, celular: string){
    return this.http.post(this.service, {csenha ,cargo, cpf, email, gerente, nome, senha, celular})
  }

  updat(id: string, cargo: string, cpf: string, email: string, gerente: boolean, nome: string, senha: string, celular: string){
    return this.http.put(this.service+id, {cargo, cpf, email, gerente, senha, nome, celular})
  }

}
