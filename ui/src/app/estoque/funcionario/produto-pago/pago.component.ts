import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EstoqueService} from '../../estoque.service';
import {Estoque} from '../../estoque';
import {Categoria} from '../../../categoria/categoria';
import {CategoriaService} from '../../../categoria/categoria.service';
import swal from 'sweetalert2';
import {CalendarModule} from 'primeng/calendar';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})

export class PagoComponent implements OnInit {

  constructor(
    private service: EstoqueService,
    private categoria: CategoriaService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}

  produtos: Estoque[];
  categorias: Categoria[];
  stock: any;
  update = false;

  cols: any[];
  selectedProd: Estoque;
  newProd: boolean;
  prod = new Estoque();
  displayDialog: boolean;

  ngOnInit() {
    this.populate();

    this.cols = [
      {field: 'nome', header: 'Nome'},
      {field: 'categoria', header: 'Categoria'},
      {field: 'lote', header: 'Un/Lote'},
      {field: 'preco', header: 'Preço'},
      {field: 'descricao', header: 'Descrição'}
    ];
  }

  populate() {
    this.service.getAllEstoque().then(s => this.produtos = s);
    this.categoria.get().then(c => this.categorias = c);
  }

  updateItem() {
    this.service.createEstoque(this.stock).subscribe(
      () => {
        this.update = false;
        this.route.navigate(['/gerente']);

      }, () => {
        this.update = true;
        swal({
          type: 'error',
          title: 'Erro!',
          text: 'Erro no servidor!'
        });
      }
    );
  }
}
