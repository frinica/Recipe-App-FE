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

  constructor(private httpClient: HttpClient) {}

  getAll(query: any): Observable<any> {
    return this.httpClient
      .get<any>(
        this.apiURL +
          'recipes/complexSearch?query= ' +
          query.search +
          '&type=' +
          query.type +
          '&cuisine=' +
          query.cuisine +
          '&diet=' +
          query.diet +
          '&number=20&' +
          this.apiKey
      )
      .pipe(catchError(this.errorHandler));
  }

  getByID(id: number): Observable<Recipe> {
    return this.httpClient
      .get<Recipe>(
        this.apiURL + 'recipes/' + id + '/information?' + this.apiKey
      )
      .pipe(catchError(this.errorHandler));
  }

  getBulk(queryString: number | string): Observable<any> {
    return this.httpClient.get<any>(
      this.apiURL +
        'recipes/informationBulk?ids=' +
        queryString +
        '&' +
        this.apiKey
    );
  }

  getRandom(): Observable<any> {
    return this.httpClient
      .get<any>(this.apiURL + 'recipes/random?number=6&' + this.apiKey)
      .pipe(catchError(this.errorHandler));
  }

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
