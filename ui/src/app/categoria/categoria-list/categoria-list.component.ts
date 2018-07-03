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

  selectedCat: Categoria;

  newCat: boolean;

  catego = new Categoria();

  displayDialog: boolean;

  ngOnInit() {
    this.populate();

    this.cols = [
      { field: 'name', header: 'Nome'}
    ];
  }

  populate() {
    this.categoria.get()
      .then(
        c => this.cat = c
      );
  }

  showAdd() {
    this.newCat = true;
    this.catego = new Categoria();
    this.displayDialog = true;
  }

  save() {
    const cats = [...this.cat];
    if (this.newCat) {
      cats.push(this.catego);
    } else {
      cats[cats.indexOf(this.selectedCat)] = this.catego;
    }

    this.cat = cats;
    this.catego = null;
    this.displayDialog = false;
  }

  delete() {
    if (confirm('Essa ação não poderá ser desfeita')) {
      const index = this.cat.indexOf(this.selectedCat);
      this.cat = this.cat.filter((val, i) => i !== index);
      this.catego = null;
      this.displayDialog = false;
    } else {
      this.displayDialog = false;
    }
  }

  onRowSelect(event) {
    this.newCat = false;
    this.catego = this.cloneCat(event.data);
    this.displayDialog = true;
  }

  cloneCat(c: Categoria): Categoria {
    let cate = new Categoria();
    for (const prop in c) {
      cate[prop] = c[prop];
    }
    return cate;
  }
}
