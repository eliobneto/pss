import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EstoqueService} from '../../estoque.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit {

  constructor(
    private service: EstoqueService,
    private route: Router
  ) {}

  stock: any;

  ngOnInit() {
    this.service.getAllEstoque().then(s => this.stock = s);
  }

  visualizar(id: String) {

  }
}
