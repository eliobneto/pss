import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
=======
import { CpfCnpjModule } from 'ng2-cpf-cnpj';
import { FormsModule} from "@angular/forms";
import { BrowserModule} from "@angular/platform-browser";
import { RouterModule} from "@angular/router";
import { AppRouting} from "../../app.routing";
import { SharedModule} from "../../shared/shared.module";
import { HttpClientModule} from "@angular/common/http";
import {DataViewModule} from "primeng/dataview";
import {PanelModule} from "primeng/panel"
>>>>>>> master
import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';

@NgModule({
  imports: [
<<<<<<< HEAD
    CommonModule
=======
    CommonModule,
    CpfCnpjModule,
    FormsModule,
    SharedModule,
    BrowserModule,
    RouterModule,
    AppRouting,
    HttpClientModule,
    DataViewModule,
    PanelModule
>>>>>>> master
  ],
  declarations: [CadastrarClienteComponent, EditarClienteComponent, ListarClienteComponent]
})
export class ClienteModule { }
