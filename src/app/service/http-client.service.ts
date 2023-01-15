import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {LocalStorageService} from '../storage/local-storage.service';
import {tap} from 'rxjs/internal/operators';
import {LoaderService} from './loader.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient,
    private localStorage: LocalStorageService,
    private loader: LoaderService
  ) { }

  get(uri): Observable<any> {
    this.loader.display(true);
    const httpOptions = {
      headers: new HttpHeaders({
      })
    };
    return this.httpClient.get<any>(environment.apiUrl + uri, httpOptions).pipe(
      tap((response) => {
        console.log('fetched data');
        this.loader.display(false);
      }),
      catchError(this.handleError<any>('getHeroes', []))
    );

  }

  pos(uri, data): Observable<any> {
    this.loader.display(true);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //'authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NzM3OTE5NTMsImV4cCI6MTY3Mzc5NTU1Mywicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiZGV2In0.A2ic9Icr-sZeOk0jFJBqlfSefVANc-3vOy9kdN10XySZeZ9unJCuNoB9QWR1mSQDd7Tv3OiSi208yxrkgA8O_2wIGUuI79OltvBJaJNNLFAjo1iHK-f3q4Zz2l4kmmYMPSYW0oz_uI8i-n8E7T-Ra_z-xEM1jcLvEqWXSu27-hLk8JNfDvciYICsvvnlU7CjMJDYi12c0Jcw45qsDF5nYj4ieXs2tUb5VM2aFY5G6nis9q3yODbKGNA2mHoQ4t_CbxFnJmnnRfKfp5bCcW_HKtSf1g4Yn_--_MxUBkCoInhPpBGPSbcoaO3-nckPGz0966OjSVN3NXulU8v9lT3-gA'
      })
    };
    return this.httpClient.post<any>(environment.apiUrl + uri, data, httpOptions).pipe(
      tap((response) => {
        console.log('posted data');
        console.log(response)
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
