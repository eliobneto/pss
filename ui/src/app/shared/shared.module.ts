import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {MaskDirective} from './mask/mask.directive';
import {UnauthorizedComponent} from './negado/unauthorized.component';
import {NotFoundComponent} from './não-encontrada/not-found.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FooterComponent,
    MaskDirective,
    UnauthorizedComponent,
    NotFoundComponent
  ],
  exports: [
    FooterComponent,
    MaskDirective,
    UnauthorizedComponent,
    NotFoundComponent
  ]
})

export class SharedModule {
}
