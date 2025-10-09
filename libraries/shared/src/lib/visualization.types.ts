interface IDataColumn {
  id: string;
  label?: string;
  type: "string" | "number" | "boolean" | "date" | "datetime" | "timeofday";
}
interface IDataRowColumn {
  f?: string;
  p?: unknown;
  v: string | number | Date;
}
interface IDataRow {
  c: IDataRowColumn[];
}
export interface IDataTable {
  cols: IDataColumn[];
  rows: IDataRow[];
}
