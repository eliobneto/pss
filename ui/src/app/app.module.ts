import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MudasenhaComponent } from './mudasenha/mudasenha.component';
import {ReadDeleteComponent} from "./cliente/read-delete/read-delete.component";
import {CreateComponent} from "./cliente/create/create.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MudasenhaComponent,
    ReadDeleteComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
