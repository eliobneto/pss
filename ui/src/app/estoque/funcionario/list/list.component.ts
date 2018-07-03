import {Component, OnInit} from '@angular/core';
import {EstoqueService} from '../../estoque.service';
import {Estoque} from '../../estoque';
import {Categoria} from '../../../categoria/categoria';
import {CategoriaService} from '../../../categoria/categoria.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  constructor(
    private service: EstoqueService,
    private categoria: CategoriaService
  ) {}

  produtos: Estoque[];
  categorias: Categoria[];
  selectedCateg: string;

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

  showAdd() {
    this.newProd = true;
    this.prod = new Estoque();
    this.displayDialog = true;
  }

  save() {
    const prods = [...this.produtos];
    if (this.newProd) {
      prods.push(this.prod);
    } else {
      prods[prods.indexOf(this.selectedProd)] = this.prod;
    }

    this.produtos = prods;
    this.prod = null;
    this.displayDialog = false;
  }

  delete() {
    if (confirm('Essa ação não poderá ser desfeita')) {
      const index = this.produtos.indexOf(this.selectedProd);
      this.produtos = this.produtos.filter((val, i) => i !== index);
      this.prod = null;
      this.displayDialog = false;
    } else {
      this.displayDialog = false;
    }
  }

  onRowSelect(event) {
    this.newProd = false;
    this.prod = this.cloneEstoque(event.data);
    this.displayDialog = true;
  }

  cloneEstoque(c: Estoque): Estoque {
    const prod = new Estoque();
    for (const prop in c) {
      prod[prop] = c[prop];
    }
    return prod;
  }
}
