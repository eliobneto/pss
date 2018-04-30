import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateComponent} from './create/create.component';
import {CpfCnpjModule} from 'ng2-cpf-cnpj';
import {FormsModule} from '@angular/forms';
import {MaskModule} from '../mask/mask.module';
import {ConfirmEqualValidatorDirective} from "./confirm-equal-validator.directive";
import { ReadDeleteComponent } from './read-delete/read-delete.component';

@NgModule({
  imports: [
    CommonModule,
    CpfCnpjModule,
    FormsModule,
    MaskModule,
  ],
  declarations: [
    CreateComponent,
    ConfirmEqualValidatorDirective,
    ReadDeleteComponent,
  ],
  exports: [
    CreateComponent,
    ReadDeleteComponent
  ]
})
export class GerenteModule { }
