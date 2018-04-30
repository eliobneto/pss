import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateComponent} from './create/create.component';
import {CpfCnpjModule} from 'ng2-cpf-cnpj';
import {FormsModule} from '@angular/forms';
import {MaskModule} from '../mask/mask.module';
import { ReadDeleteComponent } from './read-delete/read-delete.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    CpfCnpjModule,
    FormsModule,
    MaskModule,
  ],
  declarations: [
    CreateComponent,
    ReadDeleteComponent,
    EditComponent,
  ],
  exports: [
    CreateComponent,
    ReadDeleteComponent,
    EditComponent
  ]
})
export class GerenteModule { }
