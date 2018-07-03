import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { RecuperarComponent } from './recuperar/recuperar.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
      LoginComponent,
      RecuperarComponent
  ],
  exports: [
      LoginComponent
  ]
})
export class AuthModule { }
