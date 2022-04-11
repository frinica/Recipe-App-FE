import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ListRoutingModule } from './list-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [CreateComponent, ListComponent, IndexComponent],
  imports: [CommonModule, ListRoutingModule, FormsModule, ReactiveFormsModule],
})
export class ListModule {}
