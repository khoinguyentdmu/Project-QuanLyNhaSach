import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookModel } from '../../model/book-model';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.css']
})
export class ProductSliderComponent implements OnInit {

  books : Array<BookModel> = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getBooks();
  }

  public getBooks(): void {
    this.httpClient.get('http://localhost:1234/book')
      .subscribe(res => {
        console.log(JSON.stringify(res));
        let temp = JSON.parse(JSON.stringify(res));
    
        for (let i = 0; i < temp.length; i++) {
          this.books.push(new BookModel(temp[i]._id, temp[i].name, temp[i].price));
        }
      });
  }
}
