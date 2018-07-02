import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {cliente} from './cliente';

@Injectable()
export class ClienteService {
  private service = 'hola';

  constructor(private http: HttpClient, private router: Router) { }

  getClientes() {
    return this.http.get<any>('assets/demo/data/cliente.json').toPromise()
      .then(res => <cliente[]> res.data)
      .then(data => data);

  }

  excluir(id: string) {
    return this.http.delete(this.service + id);
  }

  getCli(id: string) {
    return this.http.get<cliente>(this.service + id);
  }

  criarCli(clien: cliente) {
    const cnpj = clien.cnpj;
    const telefone = clien.telefone;
    const email = clien.email;
    const password = clien.password;
    const razao = clien.razao;
    const responsavel= clien.responsavel;
    const cpfres = clien.cpfres;
    const cep = clien.cep;
    const endereco = clien.endereco;
    const cidade = clien.cidade;
    const complemento = clien.complemento;
    return this.http.post(this.service, {cnpj, telefone, email, password, razao, responsavel, cpfres, cep, endereco, cidade, complemento});
  }

  updat(id: string, clien: cliente) {
    const cnpj = clien.cnpj;
    const telefone = clien.telefone;
    const email = clien.email;
    const password = clien.password;
    const razao = clien.razao;
    const responsavel= clien.responsavel;
    const cpfres = clien.cpfres;
    const cep = clien.cep;
    const endereco = clien.endereco;
    const cidade = clien.cidade;
    const complemento = clien.complemento;
    if(password) {
      return this.http.put(this.service + id, {cnpj, telefone, email, password, razao, responsavel, cpfres, cep, endereco, cidade, complemento});
    } else {
      return this.http.put(this.service + id, {cnpj, telefone, email, razao, responsavel, cpfres, cep, endereco, cidade, complemento});
    }
  }

}
