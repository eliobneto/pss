import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CpfCnpjModule} from 'ng2-cpf-cnpj';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {SharedModule} from '../../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {CadastrarClienteComponent} from './cadastrar-cliente/cadastrar-cliente.component';
import {ListarClienteComponent} from './cliente-list/listar-cliente.component';

@NgModule({
  imports: [
    CommonModule,
    CpfCnpjModule,
    FormsModule,
    SharedModule,
    BrowserModule,
    HttpClientModule
  ],
  declarations: [
    CadastrarClienteComponent,
    ListarClienteComponent
  ]
})
export class ClienteModule {
}
