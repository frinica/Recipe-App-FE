import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { SinglePageComponent } from './single-page/single-page.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'recipe-details/:id', component: SinglePageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeRoutingModule {}
