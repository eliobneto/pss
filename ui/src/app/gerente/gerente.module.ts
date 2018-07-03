import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GerenteHomeComponent} from './gerente-home/gerente-home.component';
import {ButtonModule} from 'primeng/button';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule
  ],
  declarations: [GerenteHomeComponent]
})
export class GerenteModule { }
