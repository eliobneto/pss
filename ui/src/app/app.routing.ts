import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './auth/login/login.component';
import {CadastrarFuncionarioComponent} from './usuario/funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import {EditarFuncionarioComponent} from './usuario/funcionario/editar-funcionario/editar-funcionario.component';
import {ListarFuncionarioComponent} from './usuario/funcionario/listar-funcionario/listar-funcionario.component';
import {ListarClienteComponent} from './usuario/cliente/listar-cliente/listar-cliente.component';
import {EditarClienteComponent} from './usuario/cliente/editar-cliente/editar-cliente.component';
import {CadastrarClienteComponent} from './usuario/cliente/cadastrar-cliente/cadastrar-cliente.component';
import {UnauthorizedComponent} from './shared/negado/unauthorized.component';
import {NotFoundComponent} from './shared/não-encontrada/not-found.component';
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
  {path: 'negado', component: UnauthorizedComponent},
  {path: 'não-encontrada', component: NotFoundComponent},
  {path: 'criarcliente', component: CadastrarClienteComponent},
  {path: 'listarClientes', component: ListarClienteComponent, canActivate: [AuthGuard], data: {nivel: 'admin'}},
  {path: 'gerente/listarFuncionarios', component: ListarFuncionarioComponent, canActivate: [AuthGuard], data: {nivel: 'gerente'}},
  {path: '**', redirectTo: 'não-encontrada'}
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);

export class AppRoutingModule {
}

