import { ColumnAlign } from '../enums/column-align.enum';

export abstract class ColumnBase {
  header: string;
  field?: string | Function;
  headerClass?: string;
  width?: string;
  align?: ColumnAlign;
  containerClass?: string;
  groupByField?: string;
}
