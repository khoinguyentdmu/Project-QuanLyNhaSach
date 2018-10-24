import { Component, OnInit } from '@angular/core';
import { BookApiService } from '../../service/bookapi.service';
import { BookCategoryApiService } from '../../../admin/service/book-category-api.service';
import { BookModel } from '../../model/book-model';
import { BookCategoryModel } from 'src/app/admin/model/book-category-model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Array<BookModel>;
  bookCategories: Array<BookCategoryModel>;

  constructor(private bookApiService: BookApiService,
    private bookCategoryApiService: BookCategoryApiService) { }

  ngOnInit() {
    this.getBooks();
    this.getBookCategories();
  }

  getBooks(): void {
    this.books = [];

    this.bookApiService.getBooks().subscribe(data => {
      let temp = JSON.parse(JSON.stringify(data)).books;

      //console.log(temp);
      for (let i = 0; i < temp.length; i++) {
        this.books.push(new BookModel(
          temp[i].book._id,
          temp[i].book.name,
          temp[i].book.price,
          temp[i].bookCategory,
          temp[i].book.bookImage,
          temp[i].book.description,
          temp[i].book.format,
          temp[i].book.author,
          temp[i].book.dimensions,
          temp[i].book.publisher,
          temp[i].book.publicationDate,
          temp[i].book.language
        ));
      }
    });
  }

  getBookCategories(): void {
    this.bookCategories = [];
    this.bookCategoryApiService.getBookCategories().subscribe(data => {
      let temp = JSON.parse(JSON.stringify(data)).bookCategories;

      this.bookCategories = [];
      for (let i = 0; i < temp.length; i++) {
        this.bookCategories.push(new BookCategoryModel(
          temp[i].bookCategory._id,
          temp[i].bookCategory.name));
      }
    });
  }
}
