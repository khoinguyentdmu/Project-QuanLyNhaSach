import { Component, OnInit } from '@angular/core';
import { BookCategoryModel } from '../../model/book-category-model';
import { BookCategoryApiService } from '../../service/book-category-api.service';

@Component({
  selector: 'app-manage-book-category',
  templateUrl: './manage-book-category.component.html',
  styleUrls: ['./manage-book-category.component.css']
})
export class ManageBookCategoryComponent implements OnInit {

  bookCategories: Array<BookCategoryModel> = [];

  constructor(private bookCategoryApiService: BookCategoryApiService) { }

  ngOnInit() {
    this.getBookCategories();
  }

  getBookCategories(): void {
    this.bookCategoryApiService.getBookCategories().subscribe(data => {
      let temp = JSON.parse(JSON.stringify(data)).bookCategories;

      this.bookCategories = [];
      for (let i = 0; i < temp.length; i++) {
        this.bookCategories.push(new BookCategoryModel(
          temp[i].bookCategory._id,
          temp[i].bookCategory.name));
      }
    });

    console.log(this.bookCategories);
  }

  deleteBookCategory(id: string): void {
    if (confirm('Bạn có chắc chắn')) {
      this.bookCategoryApiService.deleteBookCategories(id)
        .subscribe(res => {
          this.getBookCategories();
        }, (err) => {
          alert("Xóa thất bại");
        });
    }
  }
}
