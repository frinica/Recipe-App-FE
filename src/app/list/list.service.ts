import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Recipe } from '../recipe/recipe';
import { List, ListEntry } from './list';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private apiURL = 'https://frinicas-recipe-app-be.herokuapp.com';

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }),
  };

  constructor(private httpClient: HttpClient) {}

  viewAll(): Observable<List[]> {
    return this.httpClient
      .get<List[]>(this.apiURL + '/lists-view', this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  store(list: any, userid: any): Observable<List> {
    let list_name = list.list_name;
    let user_id = userid;
    return this.httpClient
      .post<List>(
        this.apiURL + '/store-list',
        JSON.stringify({ list_name, user_id }),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  getByID(id: number | string): Observable<any> {
    return this.httpClient
      .get<any>(this.apiURL + '/list-view/' + id, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  update(list: any, recipeid: any): Observable<List> {
    let customlist_id = list.customlist_id;
    let recipe_id = recipeid;
    return this.httpClient
      .put<List>(
        this.apiURL + '/update-list/' + customlist_id,
        JSON.stringify({ customlist_id, recipe_id }),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  destroy(id: number) {
    return this.httpClient
      .delete<List>(this.apiURL + '/delete-list/' + id, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  delete(id: number) {
    return this.httpClient
      .delete<List>(this.apiURL + '/delete-recipe/' + id, this.httpOptions)
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
