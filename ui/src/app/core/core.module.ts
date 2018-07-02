import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthModule} from '../auth/auth.module';
import {AppRouting} from '../app.routing';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    AppRouting,
    SharedModule
  ],
  declarations: [],
  exports: [
    SharedModule
  ]
})
export class CoreModule { }
