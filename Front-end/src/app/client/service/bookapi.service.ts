import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookModel } from '../model/book-model';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  API_URL  =  'http://localhost:1234';

  constructor(private httpClient: HttpClient) { }
  
  getBooks() : Array<BookModel> {
    let books: Array<BookModel> = [];

    this.httpClient.get(this.API_URL + '/book')
    .subscribe(res => {
      console.log(JSON.stringify(res));
      let temp = JSON.parse(JSON.stringify(res));
  
      for (let i = 0; i < temp.length; i++) {
        books.push(new BookModel(temp[i]._id, temp[i].name, temp[i].price));
      }
    });

    return books;
  } 
}
