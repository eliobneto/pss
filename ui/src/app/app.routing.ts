import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
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
import {LoginComponent} from './auth/login/login.component';
import {CadastrarFuncionarioComponent} from './usuario/funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import {EditarFuncionarioComponent} from './usuario/funcionario/editar-funcionario/editar-funcionario.component';
import {ListarFuncionarioComponent} from './usuario/funcionario/listar-funcionario/listar-funcionario.component';
import {ListarClienteComponent} from './usuario/cliente/listar-cliente/listar-cliente.component';
import {EditarClienteComponent} from './usuario/cliente/editar-cliente/editar-cliente.component';
import {CadastrarClienteComponent} from './usuario/cliente/cadastrar-cliente/cadastrar-cliente.component';
import {UnauthorizedComponent} from './shared/unauthorized/unauthorized.component';
import {NotFoundComponent} from './shared/not-found/not-found.component';
import {AuthGuard} from './auth/auth.gard';
import {CategoriaListComponent} from './categoria/categoria-list/categoria-list.component';
import {GerenteHomeComponent} from './gerente/gerente-home/gerente-home.component';
import {AdminHomeComponent} from './admin/admin-home/admin-home.component';
import {CreateComponent} from './estoque/funcionario/create/create.component';
import {EditComponent} from './estoque/funcionario/edit/edit.component';
import {ListComponent} from './estoque/funcionario/list/list.component';
import {ListaComponent} from './estoque/cliente/lista/lista.component';
import {RecuperarComponent} from "./auth/recuperar/recuperar.component";

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'cliente', component: ListaComponent, canActivate: [AuthGuard], data: {nivel: 'cliente'}},
  {path: 'recuperar', component: RecuperarComponent},
  {path: 'admin', component: CategoriaListComponent, canActivate: [AuthGuard], data: {nivel: 'admin'}},
  {path: 'gerente', component: ListComponent, canActivate: [AuthGuard], data: {nivel: 'gerente'}},
  {path: 'unauthorized', component: UnauthorizedComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'criarcliente', component: CadastrarClienteComponent},
  {path: 'listarClientes', component: ListarClienteComponent, canActivate: [AuthGuard], data: {nivel: 'admin'}},
  {path: 'gerente/listarFuncionarios', component: ListarFuncionarioComponent, canActivate: [AuthGuard], data: {nivel: 'gerente'}},
  {path: '**', redirectTo: 'not-found'}
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);

export class AppRoutingModule {
}

