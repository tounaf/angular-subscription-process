import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {LocalStorageService} from '../storage/local-storage.service';
import {tap} from 'rxjs/internal/operators';
import {LoaderService} from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient,
    private localStorage: LocalStorageService,
    private loader: LoaderService
  ) { }
  get(url): Observable<any> {
    this.loader.display(true);
    const httpOptions = {
      headers: new HttpHeaders({
      })
    };
    return this.httpClient.get<any>(url, httpOptions).pipe(
      tap(_ => {
        console.log('fetched heroes');
        this.loader.display(false);
      }),
      catchError(this.handleError<any>('getHeroes', []))
    );

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      this.loader.display(false);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
