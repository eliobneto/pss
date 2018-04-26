import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {GerenteModule} from "./gerente/gerente.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GerenteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
