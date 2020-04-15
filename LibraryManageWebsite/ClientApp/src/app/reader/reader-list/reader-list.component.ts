import { Component, OnInit } from '@angular/core';
import { ReaderInfo } from '../reader.model';
import { readers } from '../reader.mock';

@Component({
  selector: 'app-reader-list',
  templateUrl: './reader-list.component.html',
  styleUrls: ['./reader-list.component.css']
})
export class ReaderListComponent implements OnInit {

  readers: Array<ReaderInfo>;

  constructor() { }

  ngOnInit() {
    this.readers = readers;
  }

  edit(index: number) {
    this.readers[index].address = "After edit-->" + this.readers[index].address;
  }

  delete(index: number) {
    this.readers.splice(index, 1);
  }

}
