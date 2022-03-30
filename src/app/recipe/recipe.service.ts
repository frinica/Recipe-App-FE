import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private apiURL = 'https://api.edamam.com';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Recipe[]> {
    return this.httpClient
      .get<Recipe[]>(this.apiURL + '/api/recipes/v2')
      .pipe(catchError(this.errorHandler));
  }

  /* create(recipe: any): Observable<Recipe> {
    return this.httpClient
      .post<Recipe>(
        this.apiURL + '/api/recipes/v2',
        JSON.stringify(recipe),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  find(id: string | number): Observable<Recipe[]> {
    return this.httpClient
      .get<Recipe[]>(this.apiURL + 'api/recipes/v2/' + id)
      .pipe(catchError(this.errorHandler));
  }

  update(id: string | number, recipe: any): Observable<Recipe> {
    return this.httpClient
      .put<Recipe>(
        this.apiURL + 'api/recipes/v2/' + id,
        JSON.stringify(recipe),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  delete(id: string | number) {
    return this.httpClient
      .delete<Recipe>(this.apiURL + 'api/recipes/v2/' + id, this.httpOptions)
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
