import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateComponent} from './create/create.component';
import {CpfCnpjModule} from 'ng2-cpf-cnpj';
import {FormsModule} from '@angular/forms';
import {ReadDeleteComponent} from './read-delete/read-delete.component';
import {EditComponent} from './edit/edit.component';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {GerenteRouting} from './gerente.routing';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CpfCnpjModule,
    FormsModule,
    SharedModule,
    BrowserModule,
    RouterModule,
    GerenteRouting
  ],
  declarations: [
    CreateComponent,
    ReadDeleteComponent,
    EditComponent
  ],
  exports: []
})
export class GerenteModule { }
