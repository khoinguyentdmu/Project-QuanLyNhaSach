import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-book',
  templateUrl: './info-book.component.html',
  styleUrls: ['./info-book.component.css']
})
export class InfoBookComponent implements OnInit {

  kt =false;

  constructor() { }

  ngOnInit() {
  }
  change() {
    this.kt = !this.kt;
  };
}