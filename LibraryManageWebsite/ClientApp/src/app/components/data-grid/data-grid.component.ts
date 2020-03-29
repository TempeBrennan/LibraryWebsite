import { Component, Input } from '@angular/core';
import { GridData, ColumnConfig } from './data-grid.model';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
/** dataGrid component*/
export class DataGridComponent {

  private _data: GridData;
  get data() {
    return this._data;
  }
  @Input()
  set data(d: GridData) {
    this._data = d;
    this.updateDefaultColumn();
  }

  /** dataGrid ctor */
  constructor() {

  }

  private updateDefaultColumn() {
    if (!this.data || this.data.columnInfos) {
      return;
    }

    if (!Array.isArray(this.data) || this.data.length === 0) {
      return;
    }

    var defaultData = <GridData>{};
    defaultData.dataList = this.data;
    defaultData.columnInfos = Object.keys(this.data[0]).map(k => <ColumnConfig>{ name: k });
    this._data = defaultData;
  }

  getColumnDisplayName(columnInfo: ColumnConfig) {
    return columnInfo.displayName ? columnInfo.displayName : columnInfo.name;
  }

  getColumnName(index: number) {
    return this.data.columnInfos[index].name;
  }
}
