import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ReadDeleteComponent } from './read-delete/read-delete.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CreateComponent, ReadDeleteComponent]
})
export class ClienteModule { }
