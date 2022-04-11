import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list.component';

const routes: Routes = [
  { path: 'lists/create', component: CreateComponent },
  { path: 'lists', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [CommonModule, RouterModule],
})
export class ListRoutingModule {}
