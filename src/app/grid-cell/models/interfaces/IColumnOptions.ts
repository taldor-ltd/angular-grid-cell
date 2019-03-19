import { ColumnAlign } from '../enums/column-align.enum';
import { GenerateIdAttr } from '../types/generate-id-attr';

export class IColumnOptions {
  header: string;
  field?: string | Function;
  headerClass?: string;
  width?: string;
  align?: ColumnAlign;
  containerClass?: string;
  groupByField?: string;
  id?: string | GenerateIdAttr;
}
