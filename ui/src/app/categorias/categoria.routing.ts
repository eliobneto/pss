import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CategoriaCreateComponent} from './categoria-create/categoria-create.component';
import {CategoriaListComponent} from './categoria-list/categoria-list.component';

const routes: Routes = [
  {path: 'categorias/new', component: CategoriaCreateComponent},
  {path: 'categorias', component: CategoriaListComponent},
  {path: 'categorias/:id', component: CategoriaCreateComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class CategoriaRouting { }
