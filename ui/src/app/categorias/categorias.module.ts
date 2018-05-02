import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriaCreateComponent} from './categoria-create/categoria-create.component';
import {CategoriaListComponent} from './categoria-list/categoria-list.component';
import {RouterModule} from '@angular/router';
import {CategoriaRouting} from './categoria.routing';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CategoriaRouting,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    CategoriaCreateComponent,
    CategoriaListComponent
  ],
  exports: []
})
export class CategoriasModule {}
