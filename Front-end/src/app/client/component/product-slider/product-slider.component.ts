import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../model/book-model';
import { BookApiService } from '../../service/bookapi.service';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.css']
})
export class ProductSliderComponent implements OnInit {

  books : Array<BookModel> = [];

  constructor(private bookApiService: BookApiService) { }

  ngOnInit() {
    this.getBooks();
  }

  public getBooks(): void {
    this.bookApiService.getBooks().subscribe(data => {
      let temp = JSON.parse(JSON.stringify(data));

      for (let i=0; i<temp.length; i++)
      {
        this.books.push(new BookModel(temp[i]._id, temp[i].name, temp[i].price));
      }
    });
  }
}
