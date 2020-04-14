import { Component, OnInit } from '@angular/core';
import { BookInfo } from '../book.model';
import { bookInfos } from '../book.mock';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Array<BookInfo>;

  constructor() { }

  ngOnInit() {
    // temp get mock data
    this.books = bookInfos;
  }

  edit(index: number) {
    this.books[index].author = "After edit-->" + this.books[index].author;
  }

  delete(index: number) {
    this.books.splice(index, 1);
  }

}
