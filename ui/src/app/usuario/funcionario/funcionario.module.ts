import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CpfCnpjModule} from 'ng2-cpf-cnpj';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {SharedModule} from '../../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {ListarFuncionarioComponent} from './funcionario-list/listar-funcionario.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  imports: [
    CommonModule,
    CpfCnpjModule,
    FormsModule,
    SharedModule,
    BrowserModule,
    HttpClientModule,
    ButtonModule,
    TableModule,
    DialogModule,
  ],
  declarations: [ListarFuncionarioComponent]
})
export class FuncionarioModule {
}
