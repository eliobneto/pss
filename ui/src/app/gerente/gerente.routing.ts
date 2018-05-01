import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CreateComponent} from './create/create.component';
import {ReadDeleteComponent} from './read-delete/read-delete.component';
import {EditComponent} from './edit/edit.component';

const routes: Routes = [
  {path: 'funcionarios/new', component: CreateComponent},
  {path: 'funcionarios', component: ReadDeleteComponent},
  {path: 'funcionarios/:id', component: CreateComponent},
  {path: 'funcionarios/edit', component: EditComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class GerenteRouting { }
