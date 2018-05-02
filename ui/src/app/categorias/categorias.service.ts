import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Categoria} from './categoria.model';

@Injectable()
export class CategoriasService {
  private categoriaUrl = `${environment.apiUrl}categorias/`;

  constructor(private http: HttpClient, private router: Router) { }

  create(nome: string) {
    return this.http.post(this.categoriaUrl, {nome});
  }

  getAll() {
    return this.http.get<Categoria>(this.categoriaUrl);
  }

  getOne(id: string) {
    return this.http.get<Categoria>(this.categoriaUrl + id);
  }

  update(nome: string, id: string) {
    return this.http.put(this.categoriaUrl + id, {id, nome});
  }

  delete(id: string) {
    this.http.delete(this.categoriaUrl);
  }
}
