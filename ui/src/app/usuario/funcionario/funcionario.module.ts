import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CpfCnpjModule} from 'ng2-cpf-cnpj';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {SharedModule} from '../../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {CadastrarFuncionarioComponent} from './cadastrar-funcionario/cadastrar-funcionario.component';
import {ListarFuncionarioComponent} from './listar-funcionario/listar-funcionario.component';
import {EditarFuncionarioComponent} from './editar-funcionario/editar-funcionario.component';
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
  declarations: [CadastrarFuncionarioComponent, ListarFuncionarioComponent, EditarFuncionarioComponent]
})
export class FuncionarioModule {
}
