import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthModule} from '../auth/auth.module';
import {AppRouting} from '../app.routing';
import {SharedModule} from '../shared/shared.module';
import {CategoriaModule} from '../categoria/categoria.module';

@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    AppRouting,
    SharedModule,
    CategoriaModule
  ],
  declarations: [],
  exports: [
    SharedModule
  ]
})
export class CoreModule { }
