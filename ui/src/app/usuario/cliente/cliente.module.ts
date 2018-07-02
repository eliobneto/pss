import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CadastrarClienteComponent, EditarClienteComponent, ListarClienteComponent]
})
export class ClienteModule { }
