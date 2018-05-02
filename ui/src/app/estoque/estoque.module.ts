import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateComponent} from './create/create.component';
import {ListComponent} from './list/list.component';
import {RouterModule} from '@angular/router';
import {EstoqueRouting} from './estoque.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    EstoqueRouting
  ],
  declarations: [
    CreateComponent,
    ListComponent
  ],
  exports: []
})
export class EstoqueModule {}
