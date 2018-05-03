import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateComponent} from './create/create.component';
import {ListComponent} from './list/list.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {EstoqueRouting} from './estoque.routing';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {EditComponent} from './edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    EstoqueRouting,
    FormsModule,
    HttpClientModule,
    CurrencyMaskModule
  ],
  declarations: [
    CreateComponent,
    ListComponent,
    EditComponent
  ],
  exports: []
})
export class EstoqueModule {}
