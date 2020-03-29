import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  stus: Array<Student>;
  constructor(http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    http.get<Array<Student>>(baseUrl + "Students").subscribe(result => {
      this.stus = result;
    });
  }
}


interface Student {
  name: string;
  age: number;
  address: string;
  hobby: string;
}
