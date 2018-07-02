import {Component, OnInit} from '@angular/core';
import {Estoque} from '../estoque';
import {ActivatedRoute, Router} from '@angular/router';
import swal from 'sweetalert2';
import {EstoqueService} from '../estoque.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  msg: string;
  error = false;
  stockId: string;
  stockNome: string;
  update = false;
  stock = new Estoque();

  constructor(
    private service: EstoqueService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.stockId = params.get('id');
      if (this.stockId) {
        this.update = true;
        this.service.getEstoque(this.stockId).subscribe(
          (s) => {
            this.stockNome = s.nome;
          }
        );
      }
    });
  }

  createEstoque() {
    this.service.createEstoque(this.stock).subscribe(
      () => {
        this.error = false;
        this.route.navigate(['/estoque']);
      }, () => {
        this.error = true;
        swal({
          type: 'error',
          title: 'Erro!',
          text: 'Produto já cadastrado!'
        });
      }
    );
  }

  updateEstoque() {
    this.service.updateEstoque(this.stock.id, this.stock).subscribe(
      () => {
        this.error = false;
        this.route.navigate(['/estoque']);
      }, () => {
        this.error = true;
        swal({
          type: 'error',
          title: 'Erro!',
          text: 'Produto já cadastrado!'
        });
      }
    );
  }

}
