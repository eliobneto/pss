import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {GerenteModule} from './gerente/gerente.module';
import {RouterModule, Routes} from "@angular/router";
import {CreateComponent} from "./gerente/create/create.component";
import {ReadDeleteComponent} from "./gerente/read-delete/read-delete.component";
import {EditComponent} from "./gerente/edit/edit.component";

const appRoutes: Routes = [
  { path: 'create', component: CreateComponent},
  { path: 'read', component: ReadDeleteComponent},
  { path: 'gerente/edit', component: EditComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    GerenteModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
