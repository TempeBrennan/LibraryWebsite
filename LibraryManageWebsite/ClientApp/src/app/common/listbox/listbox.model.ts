
export interface ListBoxColumnConfig {
    name: string;
    displayName?: string;
  }
  
  export interface ListBoxData {
    columnInfos?: Array<ListBoxColumnConfig>;
    dataList?: Array<object>;
    [key: string]: any;
  }