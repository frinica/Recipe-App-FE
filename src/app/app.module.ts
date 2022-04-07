import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RecipeModule } from './recipe/recipe.module';
import { SinglePageComponent } from './recipe/single-page/single-page.component';

@NgModule({
  declarations: [AppComponent, SinglePageComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RecipeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
