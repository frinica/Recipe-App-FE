import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';

import { IndexComponent } from './index/index.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [IndexComponent, SearchComponent],
  imports: [CommonModule, RecipeRoutingModule],
})
export class RecipeModule {}
