import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfCnpjModule } from 'ng2-cpf-cnpj';
import { FormsModule} from "@angular/forms";
import { BrowserModule} from "@angular/platform-browser";
import { RouterModule} from "@angular/router";
import { AppRouting} from "../../app.routing";
import { SharedModule} from "../../shared/shared.module";
import { HttpClientModule} from "@angular/common/http";
import { CadastrarFuncionarioComponent } from './cadastrar-funcionario/cadastrar-funcionario.component';
import { ListarFuncionarioComponent } from './listar-funcionario/listar-funcionario.component';
import { EditarFuncionarioComponent } from './editar-funcionario/editar-funcionario.component';
import {DataViewModule} from "primeng/dataview";
import {PanelModule} from "primeng/panel"
@NgModule({
  imports: [
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
  ],
  declarations: [CadastrarFuncionarioComponent, ListarFuncionarioComponent, EditarFuncionarioComponent]
})
export class FuncionarioModule { }