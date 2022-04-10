import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ListRoutingModule } from './list-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateComponent],
  imports: [CommonModule, ListRoutingModule, FormsModule, ReactiveFormsModule],
})
export class ListModule {}
