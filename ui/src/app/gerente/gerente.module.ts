import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateComponent} from './create/create.component';
import {CpfCnpjModule} from 'ng2-cpf-cnpj';
import {FormsModule} from '@angular/forms';
import {MaskModule} from '../mask/mask.module';
import {ReadDeleteComponent} from './read-delete/read-delete.component';
import {EditComponent} from './edit/edit.component';
import {RouterModule, Routes} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";

const appRoutes: Routes = [
  { path: '../edit', component: EditComponent}
];

@NgModule({
  imports: [
    CommonModule,
    CpfCnpjModule,
    FormsModule,
    MaskModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    CreateComponent,
    ReadDeleteComponent,
    EditComponent
  ],
  exports: []
})
export class GerenteModule { }
