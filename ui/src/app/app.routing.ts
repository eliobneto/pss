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

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'cliente', component: SampleDemoComponent},
    {path: 'cliente/perfil', component: FormsDemoComponent},
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
    {path: 'admin', component: DocumentationComponent}
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);

export class AppRoutingModule {}
