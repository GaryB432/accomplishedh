export interface IDataTable {
  cols: IDataColumn[];
  rows: IDataRow[];
}
interface IDataColumn {
  id: string;
  label?: string;
  type: "boolean" | "date" | "datetime" | "number" | "string" | "timeofday";
}
interface IDataRow {
  c: IDataRowColumn[];
}
interface IDataRowColumn {
  f?: string;
  p?: unknown;
  v: Date | number | string;
}
