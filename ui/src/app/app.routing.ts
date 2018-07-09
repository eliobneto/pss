import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './auth/login/login.component';
import {ListarFuncionarioComponent} from './usuario/funcionario/funcionario-list/listar-funcionario.component';
import {ListarClienteComponent} from './usuario/cliente/cliente-list/listar-cliente.component';
import {CadastrarClienteComponent} from './usuario/cliente/cadastrar-cliente/cadastrar-cliente.component';
import {UnauthorizedComponent} from './shared/negado/unauthorized.component';
import {NotFoundComponent} from './shared/não-encontrada/not-found.component';
import {AuthGuard} from './auth/auth.gard';
import {CategoriaListComponent} from './categoria/categoria-list/categoria-list.component';
import {ListComponent} from './estoque/funcionario/produto-list/list.component';
import {ListaComponent} from './estoque/cliente/lista/lista.component';
import {RecuperarComponent} from "./auth/recuperar/recuperar.component";
import {AddComponent} from "./estoque/funcionario/produto-add/add.component";

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
  {path: 'add', component: AddComponent, canActivate: [AuthGuard], data: {nivel: 'gerente'}},
  {path: '**', redirectTo: 'não-encontrada'}
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);

export class AppRoutingModule {
}

