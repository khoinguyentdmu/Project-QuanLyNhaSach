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
    this.books = this.bookApiService.getBooks();
  }
}
