import { Component, OnInit } from '@angular/core';
import { RentLevel } from '../rent-level.model';
import { RentLevelInfos } from '../rent-level.mock';

@Component({
  selector: 'app-rent-level-list',
  templateUrl: './rent-level-list.component.html',
  styleUrls: ['./rent-level-list.component.css']
})
export class RentLevelListComponent implements OnInit {
  rentLevelInfos: Array<RentLevel>;

  constructor() { }

  ngOnInit() {
    this.rentLevelInfos = RentLevelInfos;
  }

  edit(index: number) {
    this.rentLevelInfos[index].levelName = "After edit-->" + this.rentLevelInfos[index].levelName;
  }

  delete(index: number) {
    this.rentLevelInfos.splice(index, 1);
  }
}
