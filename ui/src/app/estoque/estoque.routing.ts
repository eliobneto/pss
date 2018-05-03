import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CreateComponent} from './create/create.component';
import {ListComponent} from './list/list.component';

const routes: Routes = [
  {path: 'produtos/new', component: CreateComponent},
  {path: 'produtos', component: ListComponent},
  {path: 'produtos/:id', component: CreateComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class EstoqueRouting { }
