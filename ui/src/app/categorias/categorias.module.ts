import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriaCreateComponent} from './categoria-create/categoria-create.component';
import {CategoriaListComponent} from './categoria-list/categoria-list.component';
import {RouterModule} from '@angular/router';
import {CategoriasRouting} from './categorias.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CategoriasRouting
  ],
  declarations: [
    CategoriaCreateComponent,
    CategoriaListComponent
  ],
  exports: []
})
export class CategoriasModule {}
