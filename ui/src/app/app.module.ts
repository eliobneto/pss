import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  AccordionModule,
  AutoCompleteModule,
  BreadcrumbModule,
  ButtonModule,
  CalendarModule,
  CarouselModule,
  ChartModule,
  CheckboxModule,
  ChipsModule,
  CodeHighlighterModule,
  ColorPickerModule,
  ConfirmDialogModule,
  ContextMenuModule,
  DataGridModule,
  DataListModule,
  DataScrollerModule,
  DataTableModule,
  DialogModule,
  DragDropModule,
  DropdownModule,
  EditorModule,
  FieldsetModule,
  FileUploadModule,
  GalleriaModule,
  GMapModule,
  GrowlModule,
  InputMaskModule,
  InputSwitchModule,
  InputTextareaModule,
  InputTextModule,
  LightboxModule,
  ListboxModule,
  MegaMenuModule,
  MenubarModule,
  MenuModule,
  MessagesModule,
  MultiSelectModule,
  OrderListModule,
  OrganizationChartModule,
  OverlayPanelModule,
  PaginatorModule,
  PanelMenuModule,
  PanelModule,
  PasswordModule,
  PickListModule,
  ProgressBarModule,
  RadioButtonModule,
  RatingModule,
  ScheduleModule,
  SelectButtonModule,
  SharedModule,
  SlideMenuModule,
  SliderModule,
  SpinnerModule,
  SplitButtonModule,
  StepsModule,
  TabMenuModule,
  TabViewModule,
  TerminalModule,
  TieredMenuModule,
  ToggleButtonModule,
  ToolbarModule,
  TooltipModule,
  TreeModule,
  TreeTableModule
} from 'primeng/primeng';
import {DataViewModule} from 'primeng/dataview';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {TableModule} from 'primeng/table';

import {AppComponent} from './app.component';
import {AppMenuComponent, AppSubMenuComponent} from './app.menu.component';
import {AppBreadcrumbComponent} from './app.breadcrumb.component';
import {AppTopBarComponent} from './app.topbar.component';
import {DashboardComponent} from './demo/view/dashboard.component';
import {SampleDemoComponent} from './demo/view/sampledemo.component';
import {FormsDemoComponent} from './demo/view/formsdemo.component';
import {DataDemoComponent} from './demo/view/datademo.component';
import {PanelsDemoComponent} from './demo/view/panelsdemo.component';
import {OverlaysDemoComponent} from './demo/view/overlaysdemo.component';
import {MenusDemoComponent} from './demo/view/menusdemo.component';
import {MessagesDemoComponent} from './demo/view/messagesdemo.component';
import {MiscDemoComponent} from './demo/view/miscdemo.component';
import {EmptyDemoComponent} from './demo/view/emptydemo.component';
import {ChartsDemoComponent} from './demo/view/chartsdemo.component';
import {FileDemoComponent} from './demo/view/filedemo.component';
import {UtilsDemoComponent} from './demo/view/utilsdemo.component';
import {DocumentationComponent} from './demo/view/documentation.component';

import {CarService} from './demo/service/carservice';
import {CountryService} from './demo/service/countryservice';
import {EventService} from './demo/service/eventservice';
import {NodeService} from './demo/service/nodeservice';

import {BreadcrumbService} from './breadcrumb.service';
import {CoreModule} from './core/core.module';
import {AuthService} from './auth/auth.service';

import {ListarFuncionarioComponent} from './usuario/funcionario/funcionario-list/listar-funcionario.component';
import {CadastrarClienteComponent} from './usuario/cliente/cadastrar-cliente/cadastrar-cliente.component';
import {ListarClienteComponent} from './usuario/cliente/cliente-list/listar-cliente.component';
import {FuncionarioService} from './usuario/funcionario/funcionario.service';

import {ListComponent} from './estoque/funcionario/produto-list/list.component';
import {AddComponent} from "./estoque/funcionario/produto-add/add.component";
import {PagoComponent} from "./estoque/funcionario/produto-pago/pago.component";
import {ListaComponent} from './estoque/cliente/lista/lista.component';
import {EstoqueService} from './estoque/estoque.service';

import {ClienteService} from './usuario/cliente/cliente.service';
import {AuthGuard} from './auth/auth.gard';
import {CategoriaService} from './categoria/categoria.service';
import {CurrencyMaskModule} from 'ng2-currency-mask';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AccordionModule,
    AutoCompleteModule,
    BreadcrumbModule,
    ButtonModule,
    CalendarModule,
    CarouselModule,
    ChartModule,
    CheckboxModule,
    ChipsModule,
    CodeHighlighterModule,
    ConfirmDialogModule,
    ColorPickerModule,
    SharedModule,
    ContextMenuModule,
    DataGridModule,
    DataListModule,
    DataScrollerModule,
    DataTableModule,
    DataViewModule,
    DialogModule,
    DragDropModule,
    DropdownModule,
    EditorModule,
    FieldsetModule,
    FileUploadModule,
    GalleriaModule,
    GMapModule,
    GrowlModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    LightboxModule,
    ListboxModule,
    MegaMenuModule,
    MenuModule,
    MenubarModule,
    MessagesModule,
    MultiSelectModule,
    OrderListModule,
    OrganizationChartModule,
    OverlayPanelModule,
    PaginatorModule,
    PanelModule,
    PanelMenuModule,
    PasswordModule,
    PickListModule,
    ProgressBarModule,
    RadioButtonModule,
    RatingModule,
    ScheduleModule,
    ScrollPanelModule,
    SelectButtonModule,
    SlideMenuModule,
    SliderModule,
    SpinnerModule,
    SplitButtonModule,
    StepsModule,
    TableModule,
    TabMenuModule,
    TabViewModule,
    TerminalModule,
    TieredMenuModule,
    ToggleButtonModule,
    ToolbarModule,
    TooltipModule,
    TreeModule,
    TreeTableModule,
    CoreModule,
    CurrencyMaskModule
  ],
  declarations: [
    AppComponent,
    AppMenuComponent,
    AppSubMenuComponent,
    AppBreadcrumbComponent,
    AppTopBarComponent,
    DashboardComponent,
    SampleDemoComponent,
    FormsDemoComponent,
    DataDemoComponent,
    PanelsDemoComponent,
    OverlaysDemoComponent,
    MenusDemoComponent,
    MessagesDemoComponent,
    MessagesDemoComponent,
    MiscDemoComponent,
    ChartsDemoComponent,
    EmptyDemoComponent,
    FileDemoComponent,
    UtilsDemoComponent,
    DocumentationComponent,
    ListarFuncionarioComponent,
    CadastrarClienteComponent,
    ListarClienteComponent,
    ListComponent,
    AddComponent,
    PagoComponent,
    ListaComponent
  ],
  providers: [
    CarService,
    CountryService,
    EventService,
    NodeService,
    BreadcrumbService,
    AuthService,
    ClienteService,
    FuncionarioService,
    AuthGuard,
    EstoqueService,
    CategoriaService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {
}
