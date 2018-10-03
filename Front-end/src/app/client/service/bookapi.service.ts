import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  API_URL  =  'http://localhost:1234';

  constructor(private httpClient: HttpClient) { }
  
  getBooks(){
    this.httpClient.get(this.API_URL + '/books/5bae10b97fa958027059238f').subscribe(
      (data: Object) => {
        return data;
      }
    );
  } 
}
