import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthModule} from '../auth/auth.module';
import {AppRouting} from '../app.routing';
import {SharedModule} from '../shared/shared.module';
import {AdminModule} from '../admin/admin.module';
import {GerenteModule} from '../gerente/gerente.module';
import {CategoriaModule} from '../categoria/categoria.module';

@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    AppRouting,
    SharedModule,
    CategoriaModule,
    AdminModule,
    GerenteModule
  ],
  declarations: [],
  exports: [
    SharedModule
  ]
})
export class CoreModule { }
