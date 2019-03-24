import { ColumnAlign } from '../enums/column-align.enum';

export class ColumnOptions {
  header: string;
  field?: string | Function;
  headerClass?: string;
  width?: string;
  align?: ColumnAlign;
  containerClass?: string;
  groupByField?: string;
}
