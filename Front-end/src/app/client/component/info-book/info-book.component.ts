import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../model/book-model';
import { BookApiService } from '../../service/bookapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-book',
  templateUrl: './info-book.component.html',
  styleUrls: ['./info-book.component.css']
})
export class InfoBookComponent implements OnInit {

  book: BookModel;
  kt = false;

  constructor(
    private bookApiService: BookApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //Lấy thông tin sách
    this.getBook();
  }

  //Lấy thông tin sách dựa vào id
  public getBook(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.bookApiService.getBook(id).subscribe(data => {
      let temp = JSON.parse(JSON.stringify(data));
      console.log(temp);
      this.book = new BookModel(
        temp.book._id,
        temp.book.name,
        temp.book.price,
        temp.book.bookImage,
        temp.book.description,
        temp.book.format,
        temp.book.author,
        temp.book.dimensions,
        temp.book.publisher,
        temp.book.publicationDate,
        temp.book.language
      );
    });
  }

  //Ẩn hiện chi tiết mô tả sách và bình luận sách
  change(): void {
    this.kt = !this.kt;
  }
}
