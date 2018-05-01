import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriaCreateComponent} from './categoria-create/categoria-create.component';
import {CategoriaListComponent} from './categoria-list/categoria-list.component';
import {RouterModule} from '@angular/router';
import {CategoriaRouting} from './categoria.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CategoriaRouting
  ],
  declarations: [
    CategoriaCreateComponent,
    CategoriaListComponent
  ],
  exports: []
})
export class CategoriasModule {}
