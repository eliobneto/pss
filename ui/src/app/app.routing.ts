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
import {CadastrarFuncionarioComponent} from "./usuario/funcionario/cadastrar-funcionario/cadastrar-funcionario.component";
import {EditarFuncionarioComponent} from "./usuario/funcionario/editar-funcionario/editar-funcionario.component";
import {ListarFuncionarioComponent} from "./usuario/funcionario/listar-funcionario/listar-funcionario.component";
import {ListarClienteComponent} from "./usuario/cliente/listar-cliente/listar-cliente.component";
import {EditarClienteComponent} from "./usuario/cliente/editar-cliente/editar-cliente.component";
import {CadastrarClienteComponent} from "./usuario/cliente/cadastrar-cliente/cadastrar-cliente.component";
import {CreateComponent} from './estoque/funcionario/create/create.component';
import {EditComponent} from './estoque/funcionario/edit/edit.component';
import {ListComponent} from './estoque/funcionario/list/list.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'cliente/data', component: DataDemoComponent},
    {path: 'cliente/panels', component: PanelsDemoComponent},
    {path: 'cliente/overlays', component: OverlaysDemoComponent},
    {path: 'cliente/menus', component: MenusDemoComponent},
    {path: 'cliente/messages', component: MessagesDemoComponent},
    {path: 'cliente/misc', component: MiscDemoComponent},
    {path: 'cliente/empty', component: EmptyDemoComponent},
    {path: 'cliente/charts', component: ChartsDemoComponent},
    {path: 'cliente/file', component: FileDemoComponent},
    {path: 'cliente/utils', component: UtilsDemoComponent},
    {path: 'cliente', component: SampleDemoComponent},
    {path: 'admin', component: DocumentationComponent},
    {path: 'gerente', component:DocumentationComponent},
    {path: 'criarcliente', component:DocumentationComponent},
    {path: 'recuperar', component:DocumentationComponent},
    {path: 'gerente/criarFuncionario', component:CadastrarFuncionarioComponent},
    {path: 'editarFuncionario', component:EditarFuncionarioComponent},
    {path: 'gerente/listarFuncionarios', component:ListarFuncionarioComponent},
    {path: 'admin/listarClientes', component:ListarClienteComponent},
    {path: 'editarCliente', component:EditarClienteComponent},
    {path: 'cadastrarCliente', component:CadastrarClienteComponent},
    {path: 'create', component:CreateComponent},
    {path: 'edit', component:EditComponent},
    {path: 'list', component:ListComponent}
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);

export class AppRoutingModule {}
