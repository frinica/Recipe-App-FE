import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';

import { ViewComponent } from './view/view.component';
import { SearchComponent } from './search/search.component';
import { SinglePageComponent } from './single-page/single-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ViewComponent, SearchComponent, SinglePageComponent],
  imports: [CommonModule, RecipeRoutingModule, ReactiveFormsModule],
})
export class RecipeModule {}
