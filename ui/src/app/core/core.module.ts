import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {CategoriasModule} from '../categorias/categorias.module';
import {CategoriasService} from '../categorias/categorias.service';

import localePt from '@angular/common/locales/pt';
import {HttpClient} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {GerenteModule} from '../gerente/gerente.module';
import {EstoqueModule} from '../estoque/estoque.module';
import {AppRouting} from '../app.routing';
import {EstoqueService} from '../estoque/estoque.service';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AppRouting,
    CategoriasModule,
    EstoqueModule,
    GerenteModule
  ],
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  providers: [
    CategoriasService,
    EstoqueService,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    HttpClient
  ]
})
export class CoreModule { }
