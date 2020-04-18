import { Component, OnInit } from '@angular/core';
import { StorePosition } from '../store-position.mock';
import { storePositionInfos } from '../store-position.model';

@Component({
  selector: 'app-store-position-list',
  templateUrl: './store-position-list.component.html',
  styleUrls: ['./store-position-list.component.css']
})
export class StorePositionListComponent implements OnInit {

  storePositionInfos: Array<StorePosition>;

  constructor() { }

  ngOnInit() {
    this.storePositionInfos = storePositionInfos;
  }

  edit(index: number) {
    this.storePositionInfos[index].positionId = "After edit-->" + this.storePositionInfos[index].positionId;
  }

  delete(index: number) {
    this.storePositionInfos.splice(index, 1);
  }

}
