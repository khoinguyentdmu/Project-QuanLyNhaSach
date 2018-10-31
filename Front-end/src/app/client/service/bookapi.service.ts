import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BookModel } from '../model/book-model';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  API_URL = environment.apiUrl;
  book: BookModel;

  constructor(private httpClient: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };

  getBooks(filterBookCategory: string): Observable<any> {

    let filter = '';
    if (filterBookCategory.length>0){
      filter += '?bookCategory=' + filterBookCategory;
    }

    return this.httpClient.get(this.API_URL + '/book' + filter).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getBook(idBook: string): Observable<any> {
    return this.httpClient.get(this.API_URL + '/book/' + idBook).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
}
