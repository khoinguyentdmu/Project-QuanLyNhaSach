import { Component, OnInit} from '@angular/core';
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

  constructor(
    private bookApiService: BookApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getBook();
  }

  public getBook(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.bookApiService.getBook(id).subscribe(data => {
      let temp = JSON.parse(JSON.stringify(data));
      this.book = new BookModel(temp._id, temp.name, temp.price);
    });
  }
}
