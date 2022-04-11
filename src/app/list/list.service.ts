import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { List } from './list';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private apiURL = 'http://localhost:8000/api';

  httpOptions = {
    headers: new HttpHeaders({
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
