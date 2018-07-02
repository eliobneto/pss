import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Categoria} from './categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<any>('assets/demo/data/categoria.json').toPromise()
      .then(res => <Categoria[]> res.data)
      .then(data => data);
  }
}
