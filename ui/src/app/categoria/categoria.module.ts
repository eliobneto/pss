import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import {TableModule} from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,
    TableModule
  ],
  declarations: [
    CategoriaListComponent
  ]
})
export class CategoriaModule { }
