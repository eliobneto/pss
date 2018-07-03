import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {CreateComponent} from './funcionario/create/create.component';
import {EditComponent} from './funcionario/edit/edit.component';
import {ListComponent} from './funcionario/list/list.component';
import {ListaComponent} from './cliente/lista/lista.component';
import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {SliderModule} from 'primeng/slider';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {DropdownModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    DataViewModule,
    PanelModule,
    ButtonModule,
    TableModule,
    DialogModule,
    SliderModule,
    CurrencyMaskModule,
    DropdownModule
  ],
  declarations: [
    CreateComponent,
    EditComponent,
    ListComponent,
    ListaComponent
  ]
})

export class EstoqueModule { }
