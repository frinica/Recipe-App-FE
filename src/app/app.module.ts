import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RecipeModule } from './recipe/recipe.module';
import { PublicModule } from './public/public.module';
import { RouterModule } from '@angular/router';
import { SecureComponent } from './secure/secure.component';

@NgModule({
  declarations: [AppComponent, SecureComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RecipeModule,
    PublicModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
