import { Component, OnInit } from '@angular/core';
import { BookInfo } from '../book.model';
import { bookInfos } from '../book.mock';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: BookInfo;
  constructor() { }

  ngOnInit() {
    this.book = bookInfos[0];
  }

}
