import { Component, OnInit } from '@angular/core';
import {CategoriasService} from '../categorias.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {
  msg: string;
  error = false;
  categoriaId: string;
  categoriaName: string;
  update = false;

  constructor(
    private service: CategoriasService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.categoriaId = params.get('id');
      if (this.categoriaId) {
        this.update = true;
        this.service.getOne(this.categoriaId).subscribe(
          (s) => {
            this.categoriaName = s.nome;
          }
        );
      }
    });
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

  updateCategoria(nome: string) {
    if (nome === this.categoriaName) {
      this.error = true;
      this.msg = 'O nome da categoria deve ser diferente do atual';
    } else {
      this.service.update(nome, this.categoriaId).subscribe(
        (s) => {
          this.error = false;
          this.route.navigate(['/categorias']);
        }, (e) => {
          this.error = true;
          this.msg = e['message'];
        }
      );
    }
  }
}
