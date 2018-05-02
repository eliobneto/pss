import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CreateComponent} from './create/create.component';
import {ListComponent} from './list/list.component';

const routes: Routes = [
  {path: 'estoque/new', component: CreateComponent},
  {path: 'estoque', component: ListComponent},
  {path: 'estoque/:id', component: CreateComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class EstoqueRouting { }
