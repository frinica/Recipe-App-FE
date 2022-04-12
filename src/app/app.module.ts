import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RecipeModule } from './recipe/recipe.module';
import { PublicModule } from './public/public.module';
import { RouterModule } from '@angular/router';
import { SecureComponent } from './secure/secure.component';
import { ListModule } from './list/list.module';

@NgModule({
  declarations: [AppComponent, SecureComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RecipeModule,
    PublicModule,
    ListModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
