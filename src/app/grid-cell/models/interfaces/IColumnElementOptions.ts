import { GenerateIdAttr } from '../types/generate-id-attr';

export interface IColumnElementOptions {
  field?: string;
  id?: string | GenerateIdAttr;
  class?: string;
  tooltip?: string;
  getNgClass?: (data: {}) => {};
  onClick?: Function;
}
