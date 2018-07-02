import { Component, OnInit } from '@angular/core';
import {CategoriaService} from '../categoria.service';
import {Categoria} from '../categoria';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {

  constructor(private categoria: CategoriaService) { }

  cat: Categoria[];

  cols: any[];

  ngOnInit() {
    this.categoria.get()
      .then(
        c => this.cat = c
      );

    this.cols = [
      { field: 'name', header: 'Nome'}
    ];
  }
}
