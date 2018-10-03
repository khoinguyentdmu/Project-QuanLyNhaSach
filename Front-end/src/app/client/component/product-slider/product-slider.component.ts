import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.css']
})
export class ProductSliderComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getBooks();
  }

  public getBooks(): void {
    this.httpClient.get('http://localhost:1234/books/5bae10b97fa958027059238f')
      .subscribe(res => {
        console.log(res);
      });
  }
}
