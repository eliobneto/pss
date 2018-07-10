import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {SliderModule} from 'primeng/slider';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {DropdownModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/calendar';
import {GerarComponent} from "./relatorio-gerar/gerar.component";
import {SelectButtonModule} from 'primeng/selectbutton';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    DataViewModule,
    PanelModule,
    ButtonModule,
    TableModule,
    DialogModule,
    SliderModule,
    CurrencyMaskModule,
    DropdownModule,
    CalendarModule,
    SelectButtonModule
  ],
  declarations: [
    GerarComponent
  ]
})

export class RelatorioModule { }
