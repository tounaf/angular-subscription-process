import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {LocalStorageService} from '../storage/local-storage.service';
import {tap} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient,
    private localStorage: LocalStorageService
  ) { }
  get(url): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.localStorage.get('session')
      })
    };
    return this.httpClient.get<any>(url, httpOptions).pipe(
      tap(_ => console.log('fetched heroes')),
      catchError(this.handleError<any>('getHeroes', []))
    );

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
