import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {AppRouting} from "../../app.routing";
import {SharedModule} from "../../shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';
import {ListComponent} from './list/list.component';
import {DataViewModule} from "primeng/dataview";
import {PanelModule} from "primeng/panel"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    BrowserModule,
    RouterModule,
    AppRouting,
    HttpClientModule,
    DataViewModule,
    PanelModule
  ],
  declarations: [
    CreateComponent,
    EditComponent,
    ListComponent
  ]
})

export class EstoqueModule { }
