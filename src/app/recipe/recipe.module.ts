import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';

import { ViewComponent } from './view/view.component';
import { SearchComponent } from './search/search.component';
import { SinglePageComponent } from './single-page/single-page.component';

@NgModule({
  declarations: [ViewComponent, SearchComponent, SinglePageComponent],
  imports: [CommonModule, RecipeRoutingModule],
})
export class RecipeModule {}
