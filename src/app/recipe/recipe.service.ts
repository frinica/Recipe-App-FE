import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private apiURL = 'https://api.spoonacular.com/';
  private apiKey = 'apiKey=8655ce2ce8ec4641b9f2bae582c91197';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // https://api.spoonacular.com/recipes/complexSearch?query=burgers&apiKey=8655ce2ce8ec4641b9f2bae582c91197

  constructor(private httpClient: HttpClient) {}

  getAll(queryString: string): Observable<any> {
    /* return this.httpClient
      .get(this.apiURL)
      .pipe(
        map((response: any) => {
          const recipes = response.json();
          return recipes.map((recipe: any) => new Recipe(recipe));
        })
      )
      .pipe(catchError(this.errorHandler)); */
    return this.httpClient
      .get<any>(
        this.apiURL +
          'recipes/complexSearch?query= ' +
          queryString +
          //'&intolerances=' +
          //this.intolerances +
          //'&cuisine=' +
          //this.cuisine +
          '&' +
          this.apiKey
        // https://spoonacular.com/food-api/docs
      )
      .pipe(catchError(this.errorHandler));
  }

  /*getByID(id: number): Observable<Recipe> {
    return this.httpClient
      .get(this.apiURL + '/recipes' + id + this.apiKey)
      .pipe(
        map((response) => {
          return new Recipe(response.json());
        })
      )
      .pipe(catchError(this.errorHandler));
  }
  create(recipe: Recipe): Observable<Recipe> {
    return this.httpClient
      .post(this.apiURL + '/recipe', recipe + this.apiKey)
      .pipe(
        map((response) => {
          return new Recipe(response.json());
        })
      )
      .pipe(catchError(this.errorHandler));
  }

  find(id: string | number): Observable<Recipe[]> {
    return this.httpClient
      .get<Recipe[]>(this.apiURL + 'api/recipes/v2/' + id)
      .pipe(catchError(this.errorHandler));
  }

  update(recipe: Recipe): Observable<Recipe> {
    return this.httpClient
      .put(this.apiURL + '/recipe/' + recipe.id, recipe + this.apiKey)
      .pipe(
        map((response) => {
          return new Recipe(response.json());
        })
      )
      .pipe(catchError(this.errorHandler));
  }

  delete(id: number) {
    return this.httpClient
      .delete(this.apiURL + '/recipes/' + id)
      .pipe(map((response) => null))
      .pipe(catchError(this.errorHandler));
  } */

  errorHandler(error: {
    error: { message: string };
    status: any;
    message: any;
  }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
