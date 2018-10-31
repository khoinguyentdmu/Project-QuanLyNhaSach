import { Component, OnInit, Input } from '@angular/core';
import { BookModel } from '../../model/book-model';
import { BookApiService } from '../../service/bookapi.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  @Input() books: Array<BookModel>;

  constructor(private bookApiService: BookApiService) { }

  ngOnInit() {
    this.getBooks();
    console.log(this.books);
  }

  public getBooks(): void {
    /*this.bookApiService.getBooks().subscribe(data => {
      let temp = JSON.parse(JSON.stringify(data)).books;

      console.log(temp);
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
    });*/
  }
}
