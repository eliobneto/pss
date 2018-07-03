import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppRouting} from '../app.routing';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {CreateComponent} from './funcionario/create/create.component';
import {EditComponent} from './funcionario/edit/edit.component';
import {ListComponent} from './funcionario/list/list.component';
import {ListaComponent} from './cliente/lista/lista.component';
import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';
import {InputMaskModule} from 'primeng/inputmask';
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    BrowserModule,
    RouterModule,
    AppRouting,
    HttpClientModule,
    DataViewModule,
    PanelModule,
    ButtonModule,
    InputMaskModule
  ],
  declarations: [
    CreateComponent,
    EditComponent,
    ListComponent,
    ListaComponent
  ]
})

export class EstoqueModule { }
