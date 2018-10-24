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

  //Số lượng sách mua
  numberOfBook: number;

  constructor(
    private bookApiService: BookApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initVariable();
    //Lấy thông tin sách
    this.getBook();
  }

  public initVariable(): void{
    this.numberOfBook = 1;
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
        temp.book.bookCategory,
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

  //Thay đổi số lượng sách mua 
  public changeNumberOfBook(choose: boolean): void {
    if (choose)
      this.numberOfBook++;
    else
      this.numberOfBook--;

    this.numberOfBook = Math.max(1, this.numberOfBook);
    this.numberOfBook = Math.min(10, this.numberOfBook);
  }

  //Thêm vào giỏ hàng
  public addToCart(): void {
    alert('Đã thêm vào giỏ hàng!');
  }
}
