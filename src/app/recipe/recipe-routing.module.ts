import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'recipe', redirectTo: 'recipe/index', pathMatch: 'full' },
  { path: 'recipe/index/:query', component: IndexComponent },
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeRoutingModule {}
