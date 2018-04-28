import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import {CpfCnpjModule} from "ng2-cpf-cnpj";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule, CpfCnpjModule,FormsModule
  ],
  declarations: [CreateComponent],
  exports: [
    CreateComponent
  ]
})
export class GerenteModule { }
