import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import swal from 'sweetalert2';
import {EstoqueService} from '../estoque.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  stockId: string;
  stock: any;
  update = false;

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
            this.stock = s;
          }, () => {
            swal({
              type: 'error',
              title: 'Erro!',
              text: 'Erro no servidor!'
            });
          }
        );
      } else {
        this.route.navigate(['/estoque']);
      }
    });
  }

  updateEstoque() {
    if (!this.stock.gerente) {
      this.stock.gerente = false;
    } else {
      this.stock.cargo = null;
    }
    this.service.updateEstoque(this.stock, this.stock).subscribe(
      () => {
        this.route.navigate(['/produtos']);
        swal({
          type: 'success',
          title: 'Erro!',
          text: 'Edição concluido com sucesso!'
        });
      }, () => {
        swal({
          type: 'error',
          title: 'Erro!',
          text: 'Erro no servidor!'
        });
      }
    );
  }

}