import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateComponent} from './create/create.component';
import {CpfCnpjModule} from 'ng2-cpf-cnpj';
import {FormsModule} from '@angular/forms';
import {MaskModule} from '../mask/mask.module';
import {ConfirmEqualValidatorDirective} from "./create/confirm-equal-validator.directive";

@NgModule({
  imports: [
    CommonModule,
    CpfCnpjModule,
    FormsModule,
    MaskModule
  ],
  declarations: [
    CreateComponent,
    ConfirmEqualValidatorDirective
  ],
  exports: [
    CreateComponent
  ]
})
export class GerenteModule { }
