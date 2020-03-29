
export interface ColumnConfig {
  name: string;
  displayName?: string;
}

export interface GridData {
  columnInfos?: Array<ColumnConfig>;
  dataList?: Array<object>;
  [key: string]: any;
}
