import { Component, OnInit } from '@angular/core';
import {CategoriasService} from '../categorias.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {
  msg: string;
  error = false;

  constructor(
    private service: CategoriasService,
    private route: Router
  ) { }

  ngOnInit() {
  }

  cadastrar(nome: string) {
    this.service.create(nome).subscribe(
      (s: Response) => {
        this.error = false;
        this.route.navigate(['/categorias']);
      }, (e) => {
        this.error = true;
        this.msg = e['message'];
      }
    );
  }
}
