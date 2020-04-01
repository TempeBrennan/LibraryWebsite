import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GridData } from '../components/data-grid/data-grid.model';
import { BookInfo } from '../data/bookInfo/book';
import { bookInfos } from '../data/bookInfo/mockBookInfos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  stus: Array<Student>;
  books: Array<BookInfo> = bookInfos;
  constructor(http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    // http.get<Array<Student>>(baseUrl + "Students").subscribe(result => {
    //   this.stus = result;
    // });
  }

  get data() {
    // return <GridData>this.stus;
    return <GridData>this.books;
  }

  edit(index: number) {
    this.books[index].author = "After edit-->" + this.books[index].author;
  }

  delete(index: number) {
    this.books.splice(index, 1);
  }
}


interface Student {
  name: string;
  age: number;
  address: string;
  hobby: string;
}
