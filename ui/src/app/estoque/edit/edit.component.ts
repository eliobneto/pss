import {Component, OnInit} from '@angular/core';
import {EstoqueService} from '../estoque.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoriasService} from '../../categorias/categorias.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  estoqId: string;
  estoq: any;
  update = false;
  categorias: any;

  constructor(
    private ser: EstoqueService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private categoriaService: CategoriasService
  ) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.estoqId = params.get('id');
      if (this.estoqId) {
        this.update = true;
        this.ser.getOne(this.estoqId).subscribe(
          (s) => {
            this.estoq = s;
          },
          () => {
            swal(
              'Erro!',
              'Erro no servidor!',
              'error'
            );
          }
        );
      } else {
        this.route.navigate(['/produtos']);
      }
    });
    this.categoriaService.getAll().subscribe(
      (s) => {
        this.categorias = s;
      }
    );
  }

  atualizarProduto() {
    if (!this.estoq.gerente) {
      this.estoq.gerente = false;
    } else {
      this.estoq.cargo = null;
    }
    this.ser.atualizarProduto(this.estoqId, this.estoq).subscribe(
      () => {
        this.route.navigate(['/produtos']);
      }, () => {
        swal(
          'Erro!',
          'Erro na validação com o servidor!',
          'error'
        );
      }
    );
  }
}
