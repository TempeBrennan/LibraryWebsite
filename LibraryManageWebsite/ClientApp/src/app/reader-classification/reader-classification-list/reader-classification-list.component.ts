import { Component, OnInit } from '@angular/core';
import { ReaderClassificaction } from '../reader-classifiaction-model';
import { readerClassificationList } from '../reader-classification-mock';

@Component({
  selector: 'app-reader-classification-list',
  templateUrl: './reader-classification-list.component.html',
  styleUrls: ['./reader-classification-list.component.css']
})
export class ReadClassificationListComponent implements OnInit {

  classificationInfos: Array<ReaderClassificaction>;

  constructor() { }

  ngOnInit() {
    this.classificationInfos = readerClassificationList;
  }

  edit(index: number) {
    this.classificationInfos[index].classificationName = "After edit-->" + this.classificationInfos[index].classificationName;
  }

  delete(index: number) {
    this.classificationInfos.splice(index, 1);
  }
}
