import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { LoginModel } from '../model/login-model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UtilApiService {

  API_URL = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
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

  login(admin: LoginModel): Observable<any> {
    return this.httpClient.post(this.API_URL + '/admin/login', admin, httpOptions)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  checkTheLoginStatusFromLocalStorage(value: string): Observable<any> {
    
    let token_Authorization: string = localStorage.getItem(value);
    
    if (token_Authorization == null)
      token_Authorization = "";
    
    let httpOptions = {
      headers: new HttpHeaders({'Authorization': token_Authorization})
    };

    return this.httpClient.post(this.API_URL + '/util/checkTheLoginStatus', null , httpOptions);
  }
}
