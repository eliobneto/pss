import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Estoque} from './estoque.model';

@Injectable()
export class EstoqueService {
  private estoqueUrl = `${environment.apiUrl}estoque/`;

  constructor(private http: HttpClient, private router: Router) { }

  create(nome: string) {
    return this.http.post(this.estoqueUrl, {nome});
  }

  getAll() {
    return this.http.get<Estoque>(this.estoqueUrl);
  }

  getOne(id: string) {
    return this.http.get<Estoque>(this.estoqueUrl + id);
  }

  update(nome: string, id: string) {
    return this.http.put(this.estoqueUrl + id, {id, nome});
  }

  delete(id: string) {
    return this.http.delete(this.estoqueUrl + id);
  }
}
