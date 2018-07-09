import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Funcionario} from './funcionario';

@Injectable()
export class FuncionarioService {

  constructor(private http: HttpClient, private router: Router) { }

  getFuns() {
    return this.http.get<any>('assets/data/funcionario.json').toPromise()
      .then(res => <Funcionario[]> res.data)
      .then(data => data);
  }

}
