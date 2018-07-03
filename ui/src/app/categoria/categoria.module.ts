import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    DialogModule,
    ButtonModule,
    FormsModule
  ],
  declarations: [
    CategoriaListComponent
  ]
})
export class CategoriaModule { }
