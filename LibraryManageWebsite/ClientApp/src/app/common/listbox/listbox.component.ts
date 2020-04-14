import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ListBoxData, ListBoxColumnConfig } from './listbox.model';

@Component({
  selector: 'app-listbox',
  templateUrl: './listbox.component.html',
  styleUrls: ['./listbox.component.css']
})
export class ListboxComponent {

  get data() {
    return this._data;
  }
  @Input()
  set data(data: ListBoxData) {
    this._data = data;
    this.updateDefaultColumn();
  }
  @Output() add: EventEmitter<Array<object>> = new EventEmitter();
  @Output() delete: EventEmitter<number> = new EventEmitter();
  @Output() edit: EventEmitter<number> = new EventEmitter();

  private _data: ListBoxData;

  constructor() {}

  getColumnDisplayName(columnInfo: ListBoxColumnConfig) {
    return columnInfo.displayName ? columnInfo.displayName : columnInfo.name;
  }

  getColumnName(index: number) {
    return this.data.columnInfos[index].name;
  }

  private updateDefaultColumn() {
    if (!this.data || this.data.columnInfos) {
      return;
    }

    if (!Array.isArray(this.data) || this.data.length === 0) {
      return;
    }

    var defaultData = <ListBoxData>{};
    defaultData.dataList = this.data;
    defaultData.columnInfos = Object.keys(this.data[0]).map(k => <ListBoxColumnConfig>{ name: k });
    this._data = defaultData;
  }

  private onEdit(index: number) {
    this.edit.emit(index);
    this._data = this._data;
  }

  private onDelete(index: number) {
    this.delete.emit(index);
    this._data = this._data;
  }

}
