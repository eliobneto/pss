import {Component, OnInit} from '@angular/core';
import {EstoqueService} from '../estoque.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoriasService} from '../../categorias/categorias.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  msg: string;
  error = false;
  produtoId: string;
  produtoNome: string;
  produtoPreco: number;
  produtoQtd: number;
  produtoLote: number;
  produtoDesc: string;
  produtoCateg: string;
  produtoSku: string;
  update = false;
  categorias: any;

  constructor(
    private service: EstoqueService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private categoriaService: CategoriasService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.produtoId = params.get('id');
      if (this.produtoId) {
        this.update = true;
        this.service.getOne(this.produtoId).subscribe(
          (s) => {
            this.produtoNome = s.nome;
          }
        );
      }
    });
    this.categoriaService.getAll().subscribe(
      (s) => {
        this.categorias = s;
      }
    );
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
    if (nome === this.produtoNome) {
      this.error = true;
      this.msg = 'O nome da categoria deve ser diferente do atual';
    } else {
      this.service.update(nome, this.produtoId).subscribe(
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
