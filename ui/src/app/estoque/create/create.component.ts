import {Component, OnInit} from '@angular/core';
import {EstoqueService} from '../estoque.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoriasService} from '../../categorias/categorias.service';
import {Estoque} from '../estoque.model';

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
  update = false;
  categorias: any;
  estoque = new Estoque();


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

  cadastrarProduto() {
    this.service.criarProduto(this.estoque).subscribe(
      (s: Response) => {
        this.error = false;
        this.route.navigate(['/produtos']);
      }, (e) => {
        this.error = true;
        this.msg = e['message'];
      }
    );
  }

  atualizarProduto(nome: string) {
      this.service.atualizarProduto(this.estoque.id, this.estoque).subscribe(
        (s) => {
          this.error = false;
          this.route.navigate(['/produtos']);
        }, (e) => {
          this.error = true;
          this.msg = e['message'];
        }
      );
    }
}
