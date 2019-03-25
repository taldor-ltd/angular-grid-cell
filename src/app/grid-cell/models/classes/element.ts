import { GenerateIdAttr } from '../types/generate-id-attr';

export abstract class Element {
  field?: string | Function;
  id?: string | GenerateIdAttr;
  class?: string;
  tooltip?: string;
  getNgClass?: (data: {}) => {};
  onClick?: (data: any, event: MouseEvent) => any;
}
