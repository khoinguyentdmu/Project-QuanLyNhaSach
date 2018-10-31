import { Component, OnInit } from '@angular/core';
import { BookCategoryApiService } from '../../service/book-category-api.service';
import { BookCategoryModel } from '../../model/book-category-model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-book-category',
  templateUrl: './info-book-category.component.html',
  styleUrls: ['./info-book-category.component.css']
})
export class InfoBookCategoryComponent implements OnInit {

  bookCategory: BookCategoryModel = new BookCategoryModel('', '');
  isModify: boolean = false;

  constructor(private bookCategoryApiService: BookCategoryApiService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.initModify();
  }

  initModify() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null){
      this.getBookCategory(id);
      this.isModify = true;
    }
  }

  postBookCategory(): void {
    this.bookCategoryApiService.postBookCategory(this.bookCategory).subscribe(res => {
      alert('Thêm thành công');
      this.router.navigateByUrl('/admin/book-category');
    });
  }

  putBookCategory(): void {
    this.bookCategoryApiService.putBookCategory(this.bookCategory).subscribe(res => {
      alert('Cập nhật thành công');
      this.router.navigateByUrl('/admin/book-category');
    });
  }

  getBookCategory(id: string): void {
    this.bookCategoryApiService.getBookCategory(id).subscribe(res => {
      console.log(res);
      this.bookCategory._id = res.bookCategory[0]._id;
      this.bookCategory.name = res.bookCategory[0].name;
    });
  }
}
